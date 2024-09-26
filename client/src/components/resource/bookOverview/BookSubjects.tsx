interface BookSubjectsProps {
  subjects: string[];
}

export default function BookSubjects({ subjects }: BookSubjectsProps) {
  return (
    <div className="w-full h-fit max-h-64 bg-bg_secondary rounded-xl mt-4 p-4 shadow-custom">
      <h3>Book Subjects:</h3>
      <div className="w-full h-[150px] overflow-y-auto mb-2 flex flex-wrap">
        {subjects.map((subject, idx) => (
          <p className="mr-2 mb-1" key={subject}>
            {subject}
            {idx != subjects.length - 1 && <span>,</span>}
          </p>
        ))}
      </div>
    </div>
  );
}
