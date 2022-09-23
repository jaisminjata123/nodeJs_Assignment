const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
const moment = require("moment");


//CREATE
router.post("/placeOrder", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/updateOrder/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/deleteOrder/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS BY USER
router.get(
  "/getOrder/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET user orders count based on date

router.get(
  "/findOrder/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const userDetails = req.params.userId;
    let Orderdate = req.body.Orderdate;
    const orderDate = moment().startOf(Orderdate).format(); //"2022,09,22"

    try {
      const orders = await Order.find(
        { userId: req.params.userId },
        {
          createdAt: {
            $lte: ["$createdAt", orderDate],
          },
        }
      );

      res.status(200).json(orders.length);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET all orders
router.get("/getAllOrder", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET  Create an api to list ordered products based on the customer

router.get(
  "/findOrderedProducts/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const userDetails = req.params.userId;
    let search = req.body.search_query;
    let search_suggestion_list = [];
    try {
      const orders = await Order.find({ userId: userDetails }).sort({
        createdAt: 1,
      });
      const productId = [];
      let j = 0;
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].products[j].productId != null) {
          productId.push(orders[i].products[j].productId);
        }
      }
      for (let i = 0; i < productId.length; i++) {
        let list = await Product.find(
          { _id: productId[i] },
          { title: /search$/ }
        );
        if (list != null) {
          let suggestion = await Product.find({ _id: productId[i] });
          search_suggestion_list.push(suggestion);
        }
      }

      res.status(200).json(search_suggestion_list);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

//GET User based on number of order purchased

router.get("/getCustomer", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const status = req.body.status;
    const orders = await Order.find({ status: status });
    const users = [];
    const allUsers = [];
    for (let i = 0; i < orders.length; i++) {
      users.push(orders[i].userId);
    }
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      let list = await User.find({ _id: users[i] });
      if (list != null) {
        allUsers.push(list);
      }
    }
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME

router.get("/getAdminIncome", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
