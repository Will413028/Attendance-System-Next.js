import { fetchAttendances } from "@/app/lib/api";
import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

export default async function AttendancesPage({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const data = await fetchAttendances(q, page);
  const count = data.total_count
  const attendance_records = data.data

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for an attendance..." />
        <Link href="/dashboard/attendances/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Attendance Date</td>
            <td>Time In</td>
            <td>Time Out</td>
            <td>Attendance Type</td>
          </tr>
        </thead>
        <tbody>
          {attendance_records.map((attendance_record) => (
            <tr key={attendance_records.id}>
              <td>{attendance_record.attendance_date}</td>
              <td>{attendance_record.time_in}</td>
              <td>{attendance_record.time_out}</td>
              <td>{attendance_record.attendance_type}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/attendances/${attendance_record.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}