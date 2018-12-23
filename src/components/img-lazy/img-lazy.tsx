import { Component, Prop, Element, State } from '@stencil/core';

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
   * Animation duration for opacity to have a smooth transition between small blurred img and real img
   */
  @Prop() animationDuration: number = 500;

  /**
   * Reference to ImgLazy element
   */
  @Element() private el: HTMLElement;

  /**
   * Blurr intensity in pixels.
   */
  @Prop() blurrIntensity: number = 50;

  @State() private isPreviewLoaded = false;
  @State() private isImageLoaded = false;

  componentWillLoad() {
    this.el.style.setProperty('--animationDuration', `${this.animationDuration}ms`);
    this.el.style.setProperty('--animationDurationDelay', `${this.animationDuration / 4}ms`);
    this.el.style.setProperty('--blurrIntensity', `${this.blurrIntensity}px`);
  }

  private onPreviewLoaded() {
    this.isPreviewLoaded = true;
  }

  private onImageLoaded() {
    this.el.shadowRoot.querySelector('.img').classList.remove('isLoading');
    this.el.shadowRoot.querySelector('.smallImg').classList.add('loaded');
    setTimeout(() => {
      this.isImageLoaded = true;
    }, this.animationDuration);
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
