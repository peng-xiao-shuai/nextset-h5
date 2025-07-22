declare interface CustomReactParams {
  params: Promise<{
    theme: 'dark' | 'light';
  }>;
}

declare interface CustomReactLayout extends CustomReactParams {
  children: React.ReactNode;
}
