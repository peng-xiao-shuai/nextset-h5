declare interface CustomReactParams {
  params: Promise<{
    theme: 'dark' | 'light';
  }>;
}

declare interface CustomReactLayout extends CustomReactParams {
  children: React.ReactNode;
}

declare interface Window {
  webProxy: {
    openMailbox: () => string;
  };
  setProgress?: (data: { duration: number, actionNumber: number, groupNumber: number }) => void;
}
