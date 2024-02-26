import { fetchAttendance } from "@/app/lib/api";
import { updateAttendance } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleAttendancePage = async ({ params }) => {
  
  const { id } = params;
  const attendance = await fetchAttendance(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateAttendance} className={styles.form}>
          <input type="hidden" name="id" value={attendance.id}/>
          <label>Attendance Date</label>
          <input type="date" name="attendance_date" placeholder={attendance.attendance_date} />
          <label>Time In</label>
          <input type="date" name="time_in" placeholder={attendance.time_in}/>
          <label>Time Out</label>
          <input type="date" name="time_out" placeholder={attendance.time_out}/>
          <label>Attendance Type</label>
          <select name="attendance_type" id="attendance_type">
            <option value="On Time">On Time</option>
            <option value="Early Leave">Early Leave</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleAttendancePage;