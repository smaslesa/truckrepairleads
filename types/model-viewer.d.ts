// types/model-viewer.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        loading?: 'auto' | 'lazy' | 'eager';
        reveal?: 'auto' | 'manual';
        'auto-rotate'?: boolean;
        'auto-rotate-delay'?: string;
        'rotation-per-second'?: string;
        'camera-controls'?: boolean;
        'camera-orbit'?: string;
        'camera-target'?: string;
        'field-of-view'?: string;
        'max-camera-orbit'?: string;
        'min-camera-orbit'?: string;
        'max-field-of-view'?: string;
        'min-field-of-view'?: string;
        exposure?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        'environment-image'?: string;
        'skybox-image'?: string;
        'animation-name'?: string;
        'animation-crossfade-duration'?: string;
        autoplay?: boolean;
        ar?: boolean;
        'ar-modes'?: string;
        'ar-scale'?: string;
        'ios-src'?: string;
        'touch-action'?: string;
        'disable-zoom'?: boolean;
        'disable-pan'?: boolean;
        'disable-tap'?: boolean;
        'interpolation-decay'?: string;
        onLoad?: () => void;
        onError?: (error: any) => void;
        onProgress?: (event: any) => void;
        onModelVisibility?: (event: any) => void;
      },
      HTMLElement
    >;
  }
}