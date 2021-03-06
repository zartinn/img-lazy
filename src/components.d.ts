/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ImgLazy {
    /**
    * alt property for image
    */
    'alt': string;
    /**
    * Animation duration for opacity to have a smooth transition between small blurred img and real img. Default is 1000ms;
    */
    'animationduration': number;
    /**
    * Blurr intensity in pixels. Default is 50.
    */
    'blurrintensity': number;
    /**
    * A small src that will be loaded and shown first. This src should be around 1-3kB and about 20-50px wide. The small src will be scaled up and blurred.
    */
    'smallsrc': string;
    /**
    * the main src for the image which will be loaded after the preview.
    */
    'src': string;
  }
  interface ImgLazyAttributes extends StencilHTMLAttributes {
    /**
    * alt property for image
    */
    'alt'?: string;
    /**
    * Animation duration for opacity to have a smooth transition between small blurred img and real img. Default is 1000ms;
    */
    'animationduration'?: number;
    /**
    * Blurr intensity in pixels. Default is 50.
    */
    'blurrintensity'?: number;
    'onImageLoaded'?: (event: CustomEvent) => void;
    'onPreviewLoaded'?: (event: CustomEvent) => void;
    /**
    * A small src that will be loaded and shown first. This src should be around 1-3kB and about 20-50px wide. The small src will be scaled up and blurred.
    */
    'smallsrc'?: string;
    /**
    * the main src for the image which will be loaded after the preview.
    */
    'src'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ImgLazy': Components.ImgLazy;
  }

  interface StencilIntrinsicElements {
    'img-lazy': Components.ImgLazyAttributes;
  }


  interface HTMLImgLazyElement extends Components.ImgLazy, HTMLStencilElement {}
  var HTMLImgLazyElement: {
    prototype: HTMLImgLazyElement;
    new (): HTMLImgLazyElement;
  };

  interface HTMLElementTagNameMap {
    'img-lazy': HTMLImgLazyElement
  }

  interface ElementTagNameMap {
    'img-lazy': HTMLImgLazyElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
