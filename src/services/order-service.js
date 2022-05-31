import { orderModel } from "../db";

//모델에서 오더정보를 가져오는 테이블
class OrderService {
  //오더정보 불러오기, 여기서 populate가 수행되야함
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  async addOrder(orderInfo) {
    const newOrderInfo = {
      userId: orderInfo.userId,
      orderProduct: orderInfo.productId,
    };
    const newOrder = await orderModel.addOrder(newOrderInfo);

    return newOrder;
  }
}

const orderService = new OrderService(orderModel);

export { orderService };
