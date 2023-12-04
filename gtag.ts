// Extend the Window interface to include the gtag property
interface CustomWindow extends Window {
  gtag?: (...args: any[]) => void;
}

declare const window: CustomWindow;

export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ID || "";

interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    window.gtag?.("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: EventParams): void => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
