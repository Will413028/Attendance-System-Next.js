import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleAttendancePage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Attendance Date</label>
          <input type="text" name="attendance_date" placeholder="date" />
          <label>Time In</label>
          <input type="text" name="time_in" placeholder="date"/>
          <label>Time Out</label>
          <input type="text" name="time_out" placeholder="date"/>
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