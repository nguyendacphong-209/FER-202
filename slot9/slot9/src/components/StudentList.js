const StudentList = ({ students }) => {
    return (
        <div>
            <ul>
                {students.map((students, index) => (
                    <li key={index}>{students}</li>
                ))}
            </ul>
        </div>
    );
};
export default StudentList;