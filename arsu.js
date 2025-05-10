//Access checking in a system, enabling and disabling
//Intialise a constructuose that takes in featureName(str), isEnabled(boolean), userGroupAccess(array of careers)
//check if the career type is in the userGroupAccess, if not, access deny
//Enable feature if you are flagged true and disable if flag is false
//Using if and switch conditions, tell the user what his access is to the system
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}

//Access check
FeatureToggle.prototype.canAccess = function (userRole) {
    const access =  this.isEnabled && this.userGroupAccess.includes(userRole);
    return `${userRole} has access: ${access}`

}
//Enabling and disabling feature
FeatureToggle.prototype.toggleFlag = function (flag) {
    return `The feature ${this.featureName} is Enabled: ${this.isEnabled = flag}`
}

//Example 
const notification = new FeatureToggle("notification", true, ["BetaTester", "Admin", "System Architect", "Backend Engineer"]);
console.log(notification.canAccess("System Architect"));
console.log(notification.toggleFlag(false));

//If else to simulate with
let userRole = "BetaTester";
if (notification.canAccess(userRole)) {
    console.log(`"${userRole}" can access the feature ${notification.featureName}.`);
} else {
    console.log(`"${userRole}" can't access the feature ${notification.featureName}.`);
}

//Switch case to simulate with
userRole = "Backend Engineer"
switch (userRole) {
    case "Admin":
        console.log("Granting full admin access.");
        break;
    case "BetaTester":
        console.log("Granting limited access to test new features.");
        break;
    case "System Architect":
        console.log("Granting access to view the system without making changes.");
        break;  
    case "Backend Engineer":
        console.log("Granting limited access to the database.");
        break;           
    default:
        console.log("Access denied.");
        break;
}
console.log("");


//Pseodo Code
////Intialise a constructuose that takes in freelancerName(str), projectDetails(str), logs(array of object, object has date and amount earned as property)
//using a prototype, calculate the total earned
//log the total earned
//filter the days in a given week, start and end date
//Calculate  weekly hours
//if weekly hours is greater than 40, log greater than 40
//else log less than 40 

function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}

TimeLog.prototype.totalEarnings = function () {
    const totalHours = this.logs.reduce((sum, hours) => sum + hours.hoursWorked, 0)
    const totalEarned = this.projectDetails.rate * totalHours
    console.log(`${this.freelancerName} has earned ${totalEarned}$`)
}


TimeLog.prototype.filterlogs = function (startDate, endDate) {
    return this.logs.filter(day => {
        const logDate = new Date(day.date);
        return logDate >= new Date(startDate) && logDate <= new Date(endDate);
    });
    }

TimeLog.prototype.weeklyHoursCheck = function () {        
    const weeklyHours = this.logs.reduce((sum,log) => sum + log.hoursWorked,0);
    if (weeklyHours>40){
       return `${this.freelancerName} has worked more than 40 hours this week.`
    }else{
       return `${this.freelancerName}has worked less than 40 hours this week.`

    } 
}

const freeLancer = new TimeLog("Kevine Umotoni", { name: "Kevine Umotoni", rate: 8 },
    [
        { date: "2025-05-10", hoursWorked: 2 },
        { date: "2025-05-11", hoursWorked: 4 },
        { date: "2025-05-12", hoursWorked: 8 },
        { date: "2025-05-13", hoursWorked: 2 },
        { date: "2025-05-14", hoursWorked: 6 },
        { date: "2025-05-15", hoursWorked: 2 },
        { date: "2025-03-16", hoursWorked: 8 },
        { date: "2025-05-23", hoursWorked: 1 },

    ]
)

freeLancer.totalEarnings()
console.log(freeLancer.filterlogs("2025-05-15", "2025-05-23"))
console.log(freeLancer.weeklyHoursCheck())
console.log("");

//Order Management
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

