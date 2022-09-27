import { css, LitElement } from "lit";
import { html } from "lit-html";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    .title {
      background: var(--my-panel-primary-bg, #000);
      color: var(--my-panel-primary-color, white);
      /* background: aquamarine;
      color: #222; */
      padding: 0.8rem;
      border-radius: 1rem 1rem 0 0;
      /* border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      border-bottom-left-radius: 0rem;
      border-bottom-right-radius: 0rem; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    .title.closed {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    .body {
      padding: 1rem;
      border: 1px solid aquamarine;
    }
  `;

  @property({ type: String })
  title = "WIDGET";

  @property({ type: Boolean })
  opened = false;

  @property({ type: String })
  icon = "";

  private onIconClickHandler(e: Event) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("icon-click", { bubbles: true }));
  }

  render() {
    return html`
      <div>
        <div
          class=${classMap({ title: true, closed: !this.opened })}
          @click=${() => (this.opened = !this.opened)}
        >
          ${this.title}
          <div @click=${this.onIconClickHandler}>${this.icon}</div>
        </div>

        ${when(
          this.opened,
          () => html` <div class="body">
            <slot></slot>
          </div>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
