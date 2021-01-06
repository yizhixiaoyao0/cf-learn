import { action, computed, observable } from "mobx";

class AppleStore {
  @observable apples = [
    {
      id: 0,
      weight: 233,
      isEaten: false,
    },
    {
      id: 1,
      weight: 235,
      isEaten: true,
    },
    {
      id: 2,
      weight: 256,
      isEaten: false,
    },
  ];

  @observable buttonText = "摘苹果";
  @observable newAppleId = 3;
  @observable isPicking = false;

  @computed get status() {
    let status = {
      appleNow: {
        quantity: 0,
        weight: 0,
      },
      appleEaten: {
        quantity: 0,
        weight: 0,
      },
    };

    this.apples.forEach((apple) => {
      let selector = apple.isEaten ? "appleEaten" : "appleNow";
      status[selector].quantity++;
      status[selector].weight += apple.weight;
    });

    console.log(status, "status");

    return status;
  }

  @action.bound pickApple() {
    if (this.isPicking) {
      return;
    }

    this.isPicking = true;
    this.buttonText = "正在采摘...";

    let weight = Math.floor(200 + Math.random() * 50);
    this.isPicking = false;
    this.buttonText = "摘苹果";
    this.apples.push({
      id: this.newAppleId++,
      weight: weight,
      isEaten: false,
    });
  }

  @action.bound eatApple(appleId) {
    let targetIndex = "";
    this.apples.forEach((apple, index) => {
      if (apple.id === appleId) {
        targetIndex = index;
      }
    });
    this.apples[targetIndex].isEaten = true;
  }
}

const appleStore = new AppleStore();

export default appleStore;
