import React from "react";
import "../styles/appleBasket.scss";
import AppleItem from "./AppleItem";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class AppleBasket extends React.Component {
  getAppleItem() {
    let data = [];
    this.props.store.apples.forEach((apple) => {
      if (!apple.isEaten) {
        data.push(
          <AppleItem
            apple={apple}
            eatApple={this.props.store.eatApple}
            key={apple.id}
          />
        );
      }
    });

    if (!data.length)
      data.push(
        <div className="empty-tip" key="empty">
          苹果篮子空空如也
        </div>
      );

    return data;
  }

  render() {
    const { status, isPicking, buttonText, pickApple } = this.props.store;
    const {
      appleNow: { quantity: notEatenQuantity, weight: notEatenWeight },
      appleEaten: { quantity: EatenQuantity, weight: EatenWeight },
    } = status;

    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {notEatenQuantity}个苹果，{notEatenWeight}克
            </div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
              {EatenQuantity}个苹果，{EatenWeight}克
            </div>
          </div>
        </div>

        <div className="appleList">{this.getAppleItem()}</div>

        <div className="btn-div">
          <button
            className={isPicking ? "disabled" : ""}
            onClick={() => pickApple()}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default AppleBasket;
