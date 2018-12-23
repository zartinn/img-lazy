import { Component, Prop, Element, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'img-lazy',
  styleUrl: 'img-lazy.scss',
  shadow: true
})
export class ImgLazy {
  /**
   * the main src for the image which will be loaded after the preview.
   */
  @Prop() src: string;

  /**
   * A small src that will be loaded and shown first. This src should be around 1-3kB and about 20-50px wide.
   * The small src will be scaled up and blurred.
   */
  @Prop() smallsrc: string;

  /**
   * alt property for image
   */
  @Prop() alt: string;

  /**
   * Animation duration for opacity to have a smooth transition between small blurred img and real img.
   * Default is 1000ms;
   */
  @Prop() animationduration: number;
  private _animationDuration: number = 1000;

  /**
   * Blurr intensity in pixels. Default is 50.
   */
  @Prop() blurrintensity: number;
  private _blurrIntensity: number = 50;

  /**
   * Reference to ImgLazy element
   */
  @Element() private el: HTMLElement;

  @Event() previewLoaded: EventEmitter;
  @State() private isPreviewLoaded = false;

  @Event() imageLoaded: EventEmitter;
  @State() private isImageLoaded = false;


  componentWillLoad() {
    this._blurrIntensity = this.blurrintensity ? this.blurrintensity : this._blurrIntensity;
    this._animationDuration = this.animationduration ? this.animationduration : this._animationDuration;
    this.el.style.setProperty('--animationDuration', `${this._animationDuration}ms`);
    this.el.style.setProperty('--blurrIntensity', `${this._blurrIntensity}px`);
  }

  private onPreviewLoaded() {
    this.isPreviewLoaded = true;
    this.previewLoaded.emit();
  }

  private onImageLoaded() {
    this.el.shadowRoot.querySelector('.img').classList.remove('isLoading');
    this.el.shadowRoot.querySelector('.smallImg').classList.add('loaded');
    this.imageLoaded.emit;
    setTimeout(() => {
      this.isImageLoaded = true;
    }, this._animationDuration);
  }

  render() {
    return (
      <div>
        {!this.isImageLoaded && 
          <img class="smallImg isLoading" src={this.smallsrc} onLoad={this.onPreviewLoaded.bind(this)}></img>
        }
        {this.isPreviewLoaded &&
          <img class="img isLoading" src={this.src} alt={this.alt} onLoad={this.onImageLoaded.bind(this)}></img>
        }
      </div>
    );
  }
}
