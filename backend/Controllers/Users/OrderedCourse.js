const Courses = require("../../Models/Courses");

const ViewAllCourses = async (req, res) => {
    try {
        const data  = req.body; // Object destructuring
        console.log("Received data:", data);
        const courseIdArray = data
        console.log("Course IDs:", courseIdArray);

        const coursesData = [];
        for (const courseId of courseIdArray) {
            if (courseId !== "0") {
                const course = await Courses.findById(courseId);
                if (course) {
                    coursesData.push(course);
                }
            }
        }

        if (coursesData.length > 0) {
            console.log("Found courses:", coursesData);
            res.status(200).json({ coursesData });
        } else {
            console.log("No courses found.");
            res.status(404).json({ message: "Did not find any courses." });
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = ViewAllCourses;
