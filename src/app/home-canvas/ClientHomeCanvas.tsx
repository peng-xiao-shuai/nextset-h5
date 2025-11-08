'use client';

import React from "react";

// 获取当前时间的小时数，用于判断昼夜
const currentHour = new Date().getHours();

/**
 * Canvas 配置对象 - 控制所有视觉和动画参数
 */
const CanvasConfig = {
  // 圆环起始角度（弧度）：从左上方开始
  START_ANGLE: Math.PI * 0.8,

  // 圆环结束角度（弧度）：到右上方结束
  END_ANGLE: Math.PI * 2.2,

  // 圆环最大半径（像素）：最外层圆环的半径
  maxRadius: 80,

  // 圆环线宽（像素）：每个圆环的厚度
  lineWidth: 18,

  // 镜像压缩量（比例）：倒影的纵向缩放比例，值越小倒影越小
  decrement: 0.3,

  // 圆环之间的间隙（像素）：相邻圆环之间的距离
  space: 2,

  /**
   * 目标帧率（FPS）- 控制动画每秒渲染的帧数
   * 60表示每秒60帧，帧间隔为 1000/60 ≈ 16.67ms
   */
  targetFPS: 60,

  /**
   * 帧间隔（毫秒）- 相邻两帧之间的时间间隔
   * 计算方式：1000 / targetFPS
   */
  frameInterval: 1000 / 60,

  /**
   * 波浪速度 - 控制波浪动画的速度
   * 白天(5-18点)：速度为4，动画较慢
   * 夜晚：速度为6，动画较快
   */
  waveSpeed: currentHour < 18 && currentHour > 5 ? 4 : 6,

  /**
   * 波浪振幅（像素）- 波浪上下浮动的距离
   * 白天：振幅为20像素，波浪较平缓
   * 夜晚：振幅为30像素，波浪更剧烈
   */
  waveAmplitude: currentHour < 18 && currentHour > 5 ? 30 : 40,

  /**
   * 波浪频率 - 控制波浪的密度（单位长度内波浪的数量）
   * 白天：频率0.2，波浪较稀疏
   * 夜晚：频率0.4，波浪更密集
   */
  waveFrequency: currentHour < 18 && currentHour > 5 ? 0.3 : 0.4,

  /**
   * 模糊量（像素）- 倒影的高斯模糊效果强度
   * 白天：0.5像素，轻微模糊
   * 夜晚：2.2像素，明显模糊
   */
  blurAmount: currentHour < 18 && currentHour > 5 ? 0.5 : 2.2,

  /**
   * 整体透明的 越小整体越越透明 0 - 1
   */
  globalAlpha: 0.7,
  /**
   * 远近透明的，越远越透明 1 - n. 到3几乎都消失
   */
  depthAlpha: 1.2,
} as const

/**
 * Canvas 动画类 - 绘制带波浪倒影效果的进度圆环
 * 使用双缓冲和离屏canvas优化性能
 */
export default class ClientHomeCanvas extends React.Component {
  // Canvas 引用和上下文
  private canvasRef: React.RefObject<HTMLCanvasElement | null> = React.createRef<HTMLCanvasElement | null>();

  // 主canvas上下文 - 用于绘制圆环
  private ctx!: CanvasRenderingContext2D;

  // 主canvas - 绘制圆环的离屏canvas
  private mainCanvas!: HTMLCanvasElement;
  private mainCtx!: CanvasRenderingContext2D;

  // 临时canvas - 用于绘制倒影的离屏canvas
  private tempCanvas!: HTMLCanvasElement;
  private tempCtx!: CanvasRenderingContext2D;

  // 动画状态标志
  private isAnimate: boolean = false;

  // 时间累积值 - 用于波浪动画的时间参数
  private time: number = 0;

  // 动画帧ID - 用于取消动画
  private timerId: number = -1;

  // 噪声更新计数器 - 每120帧更新一次随机参数
  private noiseUpdateCounter: number = 0;

  // 上一帧的时间戳 - 用于帧率控制
  private lastFrameTime: number = 0;

  // 当前帧率 - 记录实时FPS
  private currentFPS: number = 60;

  // 从URL参数获取的进度值

  // 总进度（0-1）- 最外层圆环的进度
  private duration: number = 0;

  // 动作进度（0-1）- 中间层圆环的进度
  private actionNumber: number = 0;

  // 组进度（0-1）- 最内层圆环的进度
  private groupNumber: number = 0;

  // 随机偏移值1 - 增加波浪动画的随机性
  private randomOffset1: number = Math.random() * Math.PI * 2

  // 随机偏移值2 - 增加波浪动画的随机性
  private randomOffset2: number = Math.random() * Math.PI * 2

  // 随机速度1 - 增加波浪动画的随机性
  private randomSpeed1: number = 0.8 + Math.random() * 0.4

  // 随机速度2 - 增加波浪动画的随机性
  private randomSpeed2: number = 1.1 + Math.random() * 0.4

  /**
   * 构造函数 - 初始化组件和从URL参数获取进度值
   */
  constructor(props: Record<string, string>) {
    super(props);

    let urlParams: URLSearchParams;
    if (typeof window !== "undefined") {
      // 获取URL查询参数
      urlParams = new URLSearchParams(window.location.search);
    } else {
      urlParams = new URLSearchParams('');
    }

    // 从URL参数中读取三个进度值
    this.duration = Number(urlParams.get('duration')) || 0;
    this.actionNumber = Number(urlParams.get('actionNumber')) || 0;
    this.groupNumber = Number(urlParams.get('groupNumber')) || 0;
  }

  /**
   * 绘制单个圆环
   * @param ctx - Canvas上下文
   * @param progress - 圆环填充进度（0-1）
   * @param size - 圆环半径
   * @param gradients - 渐变色数组 [背景色, 前景色]
   */
  drawRing(ctx: CanvasRenderingContext2D, progress: number, size: number, gradients: [string, string]) {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    // 获取canvas显示尺寸（逻辑像素）
    const rect = canvas.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    // 计算圆心位置 - 水平居中，垂直向下放置
    const centerX = displayWidth / 2;
    const centerY = displayHeight - CanvasConfig.maxRadius / 2 - CanvasConfig.lineWidth;

    // 绘制背景圆环（半透明）
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, CanvasConfig.START_ANGLE, CanvasConfig.END_ANGLE, false);
    ctx.strokeStyle = gradients[0];
    ctx.stroke();

    // 如果进度大于0，绘制前景圆环（填充部分）
    if (progress > 0) {
      ctx.globalAlpha = 1;
      ctx.beginPath();

      // 计算当前进度对应的结束角度
      const totalAngle = CanvasConfig.END_ANGLE - CanvasConfig.START_ANGLE;
      const endAngle = Math.min(CanvasConfig.START_ANGLE + totalAngle * progress, CanvasConfig.END_ANGLE);
      ctx.arc(centerX, centerY, size, CanvasConfig.START_ANGLE, endAngle, false);

      // 计算渐变的起点和终点坐标
      const startX = centerX + size * Math.cos(CanvasConfig.START_ANGLE);
      const startY = centerY + size * Math.sin(CanvasConfig.START_ANGLE);
      const endX = centerX + size * Math.cos(endAngle);
      const endY = centerY + size * Math.sin(endAngle);

      // 创建从起点到终点的线性渐变
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, gradients[1]);
      gradient.addColorStop(1, gradients[0]);
      ctx.strokeStyle = gradient;
      ctx.stroke();
    }

    // 恢复默认透明度
    ctx.globalAlpha = 1.0;
  }

  /**
   * 绘制所有圆环
   * 包括三层圆环：外层(红)、中层(黄)、内层(紫)
   */
  drawAllRings() {
    // 清空主canvas
    this.mainCtx.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);

    // 第一层圆环 - 红色渐变，最外层
    this.drawRing(this.mainCtx, this.duration, CanvasConfig.maxRadius, ['#ff2300', '#ff7600']);

    // 第二层圆环 - 黄色渐变，中间层
    this.drawRing(this.mainCtx, this.actionNumber, CanvasConfig.maxRadius - CanvasConfig.lineWidth - CanvasConfig.space, ['#ffb300', '#ffd500']);

    // 第三层圆环 - 紫色渐变，最内层
    this.drawRing(this.mainCtx, this.groupNumber, CanvasConfig.maxRadius - CanvasConfig.lineWidth * 2 - CanvasConfig.space * 2, ['#3b14af', '#1533ad']);
  }

  /**
   * 创建波浪倒影效果
   * 流程：绘制圆环 → 创建倒影 → 添加波浪 → 渲染到主canvas
   */
  createWaveReflection() {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 获取显示尺寸（逻辑像素）
    const rect = canvas.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    // 第一步：绘制所有圆环到主canvas
    this.drawAllRings();

    // 第二步：清空临时canvas并创建倒影
    this.tempCtx.clearRect(0, 0, displayWidth, displayHeight);

    this.tempCtx.save();
    // 将canvas向下移动，然后沿X轴翻转并缩放
    this.tempCtx.translate(0, displayHeight * CanvasConfig.decrement);
    this.tempCtx.scale(1, -CanvasConfig.decrement);

    // 应用模糊效果以增强倒影的视觉效果
    if (CanvasConfig.blurAmount > 0) {
      this.tempCtx.filter = `blur(${CanvasConfig.blurAmount}px)`;
    }

    // 从主canvas复制内容到临时canvas
    this.tempCtx.drawImage(this.mainCanvas, 0, 0, displayWidth, displayHeight);
    this.tempCtx.restore();
    this.tempCtx.filter = 'none';

    // 第三步：提取倒影图像数据
    const flippedImageData = this.tempCtx.getImageData(0, 0, canvasWidth, canvasHeight);

    const reflectionStartY = 0;
    const reflectionHeight = canvasHeight - reflectionStartY;

    // 清空主canvas，准备绘制波浪效果
    this.ctx.clearRect(0, 0, displayWidth, displayHeight);

    // 第四步：定期更新随机参数，增加波浪的动态感
    this.noiseUpdateCounter++;
    if (this.noiseUpdateCounter > 120) {
      // 每120帧随机调整参数
      this.randomOffset1 += (Math.random() - 0.5) * 0.1;
      this.randomOffset2 += (Math.random() - 0.5) * 0.1;
      this.randomSpeed1 += (Math.random() - 0.5) * 0.02;
      this.randomSpeed2 += (Math.random() - 0.5) * 0.02;

      // 限制参数在合理范围内
      this.randomSpeed1 = Math.max(0.7, Math.min(1.3, this.randomSpeed1));
      this.randomSpeed2 = Math.max(1.0, Math.min(1.6, this.randomSpeed2));

      this.noiseUpdateCounter = 0;
    }

    // 第五步：为倒影添加波浪效果
    const outputImageData = this.ctx.createImageData(canvasWidth, reflectionHeight);

    // 逐像素处理波浪效果
    for (let y = 0; y < reflectionHeight; y++) {
      for (let x = 0; x < canvasWidth; x++) {
        // 计算第一层正弦波浪
        const wave1 = Math.sin(x * CanvasConfig.waveFrequency + this.time) * CanvasConfig.waveAmplitude;

        // 计算第二层正弦波浪（增加复杂度）
        const wave2 = Math.sin(x * CanvasConfig.waveFrequency * 1.5 + y * CanvasConfig.waveFrequency * 0.5 + this.time * 1.3) * CanvasConfig.waveAmplitude * 0.5;

        // 合并两个波浪效果
        const waveOffset = wave1 + wave2;

        // 根据深度（Y坐标）调整波浪效果强度
        const depthFactor = y / reflectionHeight;

        const finalOffset = Math.floor(waveOffset * depthFactor);

        // 计算源像素坐标（应用波浪偏移）
        let sourceX = x + finalOffset;
        const sourceY = reflectionStartY + y;

        // 边界处理，确保坐标在有效范围内
        sourceX = Math.max(0, Math.min(canvasWidth - 1, sourceX));
        const sourceYClamped = Math.max(0, Math.min(canvasHeight - 1, sourceY));

        // 计算源像素和目标像素的数据索引
        const sourceIndex = (sourceYClamped * canvasWidth + sourceX) * 4;
        const targetIndex = (y * canvasWidth + x) * 4;

        // 复制像素并添加透明度渐变（越深越透明）
        const alpha = CanvasConfig.globalAlpha - (depthFactor * CanvasConfig.depthAlpha);

        outputImageData.data[targetIndex] = flippedImageData.data[sourceIndex];        // R
        outputImageData.data[targetIndex + 1] = flippedImageData.data[sourceIndex + 1]; // G
        outputImageData.data[targetIndex + 2] = flippedImageData.data[sourceIndex + 2]; // B
        outputImageData.data[targetIndex + 3] = Math.floor(flippedImageData.data[sourceIndex + 3] * alpha); // A
      }
    }

    // 第六步：将处理后的图像数据渲染到canvas
    this.ctx.putImageData(outputImageData, 0, reflectionStartY);
  }

  /**
   * 初始化Canvas
   * 设置DPR（设备像素比）、创建离屏canvas并启动动画
   */
  initCanvas() {
    // 禁用DPR缩放（保持1:1）
    window.devicePixelRatio = 1;
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    // 如果canvas还未渲染，延迟重试
    if (rect.width === 0 || rect.height === 0) {
      setTimeout(() => this.initCanvas(), 100);
      return;
    }

    const dpr = window.devicePixelRatio || 1;

    // 设置canvas的物理像素尺寸
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // 获取主canvas的2D上下文
    const ctx = canvas.getContext("2d", {
      // alpha: true,
      // desynchronized: true
    })!;
    ctx.scale(dpr, dpr);
    this.ctx = ctx;

    // 创建主canvas（离屏canvas）- 用于绘制圆环
    this.mainCanvas = document.createElement("canvas");
    this.mainCanvas.width = canvas.width;
    this.mainCanvas.height = canvas.height;
    this.mainCtx = this.mainCanvas.getContext("2d")!;
    this.mainCtx.scale(dpr, dpr);
    this.mainCtx.lineCap = "round";
    this.mainCtx.lineWidth = CanvasConfig.lineWidth;

    // 创建临时canvas（离屏canvas）- 用于绘制倒影
    this.tempCanvas = document.createElement("canvas");
    this.tempCanvas.width = canvas.width;
    this.tempCanvas.height = canvas.height;
    this.tempCtx = this.tempCanvas.getContext("2d")!;
    this.tempCtx.scale(dpr, dpr);

    // 启动动画循环
    this.startAnimation();
  }

  /**
   * 启动动画循环
   * 使用 requestAnimationFrame 实现流畅的60fps动画
   * 配合帧率控制确保稳定的渲染性能
   */
  startAnimation() {
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.lastFrameTime = performance.now();

    const animate = (currentTime: number) => {
      if (!this.isAnimate) return;

      // 计算距离上一帧的时间差
      const deltaTime = currentTime - this.lastFrameTime;

      // 检查是否达到了目标帧率的间隔
      if (deltaTime >= CanvasConfig.frameInterval) {
        // 更新上一帧的时间戳
        this.lastFrameTime = currentTime - (deltaTime % CanvasConfig.frameInterval);

        // 累积时间值，用于波浪动画计算
        this.time += CanvasConfig.waveSpeed * 0.02;

        // 计算当前实时帧率
        this.currentFPS = Math.round(1000 / deltaTime);

        // 每帧创建波浪倒影效果
        this.createWaveReflection();
      }

      // 请求下一帧动画
      this.timerId = requestAnimationFrame(animate) as unknown as number;
    };

    animate(performance.now());
  }

  /**
   * 停止动画循环
   */
  stopAnimation() {
    this.isAnimate = false;
    if (this.timerId !== -1) {
      cancelAnimationFrame(this.timerId);
      this.timerId = -1;
    }
  }

  /**
   * React 生命周期 - 组件挂载时调用
   */
  componentDidMount() {
    // 根据系统主题设置背景色
    document.body.classList.add('bg-[#f1f3f5]');

    // 禁用移动端滚动反弹效果
    document.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, { passive: false });

    // 初始化canvas
    this.initCanvas();
  }

  /**
   * React 生命周期 - 组件卸载时调用
   */
  componentWillUnmount() {
    // 清理动画资源
    this.stopAnimation();
  }

  /**
   * React 渲染方法 - 返回canvas DOM元素
   */
  render() {
    return <canvas ref={this.canvasRef} style={{ width: '100%', height: CanvasConfig.maxRadius * 2 + 'px' }}></canvas>
  }
}