declare interface CustomReactParams {
  params: Promise<{
    theme: 'dark' | 'light';
  }>;
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare interface CustomReactLayout extends CustomReactParams {
  children: React.ReactNode;
}
