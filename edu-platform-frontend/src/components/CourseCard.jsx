export default function CourseCard({ course, onEnroll }) {
    return (
      <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p><strong>Сложность:</strong> {course.difficulty}</p>
        {onEnroll && (
          <button onClick={() => onEnroll(course.id)}>Записаться</button>
        )}
      </div>
    );
  }