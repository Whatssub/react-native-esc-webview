import { requireNativeComponent } from 'react-native';
import type { NativeWebViewWindows } from './WebViewTypes';

export const RCTWebView: typeof NativeWebViewWindows =
  requireNativeComponent('ESCWebView');

export const RCTWebView2: typeof NativeWebViewWindows =
  requireNativeComponent('ESCWebView2');
