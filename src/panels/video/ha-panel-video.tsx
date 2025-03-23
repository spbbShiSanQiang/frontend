import { LitElement, html, css, property } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-panel-video")
class HaPanelVideo extends LitElement {
  @property({ type: String }) public hass!: any; // Home Assistant object

  static styles = css`
    .video-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: #f7f7f7;
    }
    .video-container video {
      max-width: 90%;
      max-height: 70vh;
      border: 2px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .video-title {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  `;

  protected render() {
    const videoUrl = "http://192.168.";

    return html`
      <div class="video-container">
        <video controls autoplay>
          <source src=${videoUrl} type="video/mp4" />
          您的浏览器不支持查看门铃摄像头。
        </video>
        <div class="video-title">当前播放：门铃摄像头</div>
      </div>
    `;
  }
}