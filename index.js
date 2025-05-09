//A

function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function(userRole){
    return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function (flag){
    this.isEnabled = flag;
};

if(notification.canAccess(userRole)){
    console.log(`${userRole} can access ${notification.featureName}.`);
}

else{
    console.log(`${userRole} can't access ${notification.featureName}`);
}

switch (userRole){
    case 'Admin':
        console.log(`${userRole} has full access.`);
        break;

        case 'betaTester':
        console.log(`${userRole} has access to test new feautres and services.`);
        break;

    case 'User':
        console.log(`${userRole} has access to the interface.`);

    case 'Company staff':
        console.log(`${userRole} has access to the new features before release.`);
        break;

    default:
        console.log(`${userRole} has no access to the system.`);
        break;

}

console.log(`Feature ${notification.featureName} is now available: ${notification.isEnabled}`);
const notification = new FeatureToggle("Notification", true, ['Admin', 'betaTester', 'User', 'Company staff']);
console.log(`Admin has access to ${notification.featureName}: ${notification.canAccess("Admin")}`);



//sv
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
  }
  FeatureToggle.prototype.canAccess = function(userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
  };
  FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
  };
  // Example Usage
  const feature = new FeatureToggle("Designer", false, ["betaTesters", "admins"]);
  console.log(`Feature "${feature.featureName}" is currently: ${feature.isEnabled}`);
  console.log(`Admin can access: ${feature.canAccess("admins")}`);
  console.log(`Regular user can access: ${feature.canAccess("regularUser")}`);
  feature.toggleFeature(true);
  console.log(`Feature "${feature.featureName}" is now: ${feature.isEnabled}`);
  console.log(`Admin can access: ${feature.canAccess("admins")}`);
  const userRole = "betaTesters"; // Example role
if (feature.canAccess(userRole)) {
  console.log(`User role "${userRole}" can access the feature "${feature.featureName}".`);
} else {
  console.log(`User role "${userRole}" cannot access the feature "${feature.featureName}".`);
}
const action = "view";
switch (userRole) {
  case "admins":
    console.log("Granting full admin access.");
    break;
  case "betaTesters":
    console.log("Granting limited access for testing.");
    break;
  default:
    console.log("Access denied.");
    break;
}

console.log("");

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

//Employee

//Employee performance
function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedbacks = [];
}

Employee.prototype.averageScore = function () {
    const scores = Object.values(this.performanceMetrics);
    const overallScore = scores.reduce((total, score) => total + score, 0);
    return overallScore / scores.length;
};


//Performance level
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
        return "Needs PIP and major improvement";
    }
};


//Adding feedback
Employee.prototype.addFeedbacks = function (newFeedback) {
    if(newFeedback){
        this.feedbacks.push(newFeedback)
    }
};
const employee = new Employee(
    101,
    "Semhal Estifanos",
    { coding: 8, typing: 3, scalability: 5 }
);
console.log(`The average performance score of ${employee.name} is ${employee.averageScore()}`);
console.log(`Performance level: ${employee.classifyPerformanceLevel()}`);
employee.addFeedbacks("You need to make your code scalable");
console.log(`Feedbacks: ${employee.feedbacks}`);
console.log("");

//E-learning system
function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
}
Course.prototype.studentsThatCompleted = function() {
    const studentsWhoCompleted = [];
    this.students.forEach(student => {
        if (student.status === "Complete") {
            studentsWhoCompleted.push(student.name);
        }
    });
    return studentsWhoCompleted;
};

//Count students based on expertise
Course.prototype.countEnrolledStudentsByExpertise = function() {
    const expertiseCounts = {};
    this.students.forEach(student => {
      const expertise = student.expertise;
      expertiseCounts[expertise] = (expertiseCounts[expertise] || 0) + 1;
    });
    return expertiseCounts;
  };

//Example 
const course = new Course(
    "Web Development",
    { name: "JanHuntere",
      epertise: "React" },
    [
        { name: "Arsema", experise: 'Full Stack',status: "Complete" },
        { name: "Lynn", experise: 'Web Development', status: "InComplete" },
        { name: "Victoria", experise: 'DAS', status: "Complete" },
        { name: "Birhanu", experise: 'DAS', status: "Incomplete" },
        { name: "Judy", experise: 'product Management', status: "Complete" },
        { name: "Pheobe", experise: 'Full Stack',status: "InComplete" }
    ]
);

console.log("studentsThatCompleted:", course.studentsThatCompleted());
console.log(`Enrolled students by expertise: ${course.countEnrolledStudentsByExpertise()}`);

