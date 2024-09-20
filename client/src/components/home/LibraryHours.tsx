export default function LibraryHours() {
  return (
    <div className="w-full h-fit bg-bg_secondary rounded-xl shadow-custom p-4">
      <h3>Library Hours</h3>
      <table className="border-collapse w-full" id="hours">
        <tbody>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#E7F7F1]">
            <td className="text-xl">Monday</td>
            <td className="text-xl">10 AM - 6 PM</td>
          </tr>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#EBE9F6]">
            <td className="text-xl">Tuesday</td>
            <td className="text-xl">11 AM - 8 PM</td>
          </tr>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#E7F7F1]">
            <td className="text-xl">Wednesday</td>
            <td className="text-xl">10 AM - 6 PM</td>
          </tr>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#EBE9F6]">
            <td className="text-xl">Thursday</td>
            <td className="text-xl">11 AM - 8 PM</td>
          </tr>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#E7F7F1]">
            <td className="text-xl">Friday</td>
            <td className="text-xl">10 AM - 6 PM</td>
          </tr>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#EBE9F6]">
            <td className="text-xl">Saturday</td>
            <td className="text-xl">10 AM - 5 PM</td>
          </tr>
          <tr className="border border-solid border-[rgba(122,121,120,0.2)] p-2 bg-[#E7F7F1]">
            <td className="text-xl">Sunday</td>
            <td className="text-xl">Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
