
// function FeatureToggle(featureName, isEnabled, userGroupAccess) {
//     this.featureName = featureName;
//     this.isEnabled = isEnabled;
//     this.userGroupAccess = userGroupAccess;
// }

// const notification = new FeatureToggle("Notification", true, ['Admin', 'betaTester', 'User', 'Company staff']);

// FeatureToggle.prototype.canAccess = function(userRole){
//     return this.isEnabled && this.userGroupAccess.includes(userRole);
// };
// console.log(`Feature ${notification.featureName} is now available: ${notification.isEnabled}`);
// FeatureToggle.prototype.toggleFeature = function (flag){
//     this.isEnabled = flag;
// };
// console.log(`Admin has access to ${notification.featureName}: ${notification.canAccess("Admin")}`);
// if(notification.canAccess(userRole)){
//     console.log(`${userRole} can access ${notification.featureName}.`);
// }
// else{
//     console.log(`${userRole} can't access ${notification.featureName}`);
// }
// const userRole = "User";

// switch (userRole){
//     case 'Admin':
//         console.log(`${userRole} has full access.`);
//         break;

//         case 'betaTester':
//         console.log(`${userRole} has access to test new feautres and services.`);
//         break;

//     case 'User':
//         console.log(`${userRole} has access to the interface.`);

//     case 'Company staff':
//         console.log(`${userRole} has access to the new features before release.`);
//         break;

//     default:
//         console.log(`${userRole} has no access to the system.`);
//         break;

// }


//Order Managment
function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.totalCost = function () {
    return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
};

Order.prototype.updateOrderStatus = function (isPaid) {
    if (isPaid) {
        this.status = "Paid";
    } else {
        this.status = "Pending Payment";
    }
};

Order.prototype.categorizeOrder = function () {
    const totalCost = this.totalCost();
    let urgency;

    switch (true) {
        case totalCost > 500:
            urgency = "High";
            break;
        case totalCost > 200:
            urgency = "Medium";
            break;
        default:
            urgency = "Low";
    }

    if (this.status === "Pending Payment") {
        urgency += " - Awaiting Payment";
    }

    return urgency;
};

const order = new Order(
    { name: "Arsema A.", email: "arsema@gmail.com" },
    [
        { productName: "car", quantity: 1, unitPrice: 12000000 },
        { productName: "car towel", quantity: 1, unitPrice: 5 },
    ],
    'Still Pending'
);

console.log(`The total price is ${order.totalCost()} birr.`);

order.updateOrderStatus(true);
console.log(`Your items have been ${order.status}.`);

const urgency = order.categorizeOrder();
console.log(`Order Urgency: ${urgency}`);
console.log(" ");

//Employee performance
function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
}

Employee.prototype.averageScore = function () {
    const scores = Object.values(this.performanceMetrics);
    const overallScore = scores.reduce((total, score) => total + score, 0);
    return overallScore / scores.length;
};

Employee.prototype.classifyPerformanceLevel = function () {
    const averageScore = this.averageScore();
    if (averageScore >= 9) {
        return "Excellent";
    }
    else if (averageScore >= 8) {
        return "very good";
    }
    else if (averageScore >= 7) {
        return "good";
    }
    else if (averageScore >= 6) {
        return "Need Improvmets";
    }
    else {
        return "Needs PIP";
    }
};


Employee.prototype.addFeedback = function (newFeedback) {
    if (this.classifyPerformanceLevel() === "Needs PIP") {
        this.feedback.push(newFeedback);
    }
    else {
        console.log("Employee is performing well, no additional feedback needed.");
    }
};

const employee = new Employee(
    101,
    "Semhal Estifanos",
    { coding: 8, typing: 3, scalability: 5 },
    ["Good coding skills", "Meets deadlines consistently"]
);

console.log(`The average performance score of ${employee.name} is ${employee.averageScore()}`);
console.log(`Performance level: ${employee.classifyPerformanceLevel()}`);

employee.addFeedback("Improve attention to detail.");
console.log(`Feedback: ${employee.feedback}`);
