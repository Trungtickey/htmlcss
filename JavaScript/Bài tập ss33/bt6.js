class Job{
    constructor(id, title, description, completed){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
class JobList{
    constructor(){
       this.jobs=[];
    }
    addJob() {
        var id = prompt("Nhập ID công việc:");
        var title = prompt("Nhập tiêu đề công việc:");
        var description = prompt("Mô tả công việc:");
        var completed = prompt("Công việc đã hoàn thành? (true/false)").toLowerCase() === 'true';

        var job = new Job(id, title, description, completed);
        this.jobs.push(job);
        console.log("Công việc mới đã được thêm vào danh sách.");
           }
    printJobs() {
            console.log("Danh sách công việc:");
            this.jobs.forEach(job =>{"ID: " + job.id + ", Tiêu Đề: " + job.title + ", Mô Tả: " + job.description + ", Hoàn Thành: " + job.completed});
        }
        findJobById() {
            const id = prompt("Nhập ID công việc cần tìm:");
            const foundJob = this.jobs.find(job => job.id === id);
            if (foundJob) {
                console.log(`Công việc có ID: ${id}`);
                console.log(`Tiêu đề: ${foundJob.title}`);
                console.log(`Mô tả: ${foundJob.description}`);
                console.log(`Hoàn thành: ${foundJob.completed}`);
            } else {
                console.log("Không tìm thấy công việc với ID đã nhập.");
            }
        }
}
const jobList = new JobList();

function main() {
    while (true) {
        const choice = prompt("Chọn 1 để thêm công việc, chọn 2 để in danh sách công việc, chọn 3 để tìm kiếm công việc theo ID, chọn 4 để thoát:");

        switch (choice) {
            case '1':
                jobList.addJob();
                break;
            case '2':
                jobList.printJobs();
                break;
            case '3':
                jobList.findJobById();
                break;
            case '4':
                console.log("Chương trình đã kết thúc.");
                return; // Thoát khỏi hàm main() để kết thúc chương trình
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

main(); // Gọi hàm main() để bắt đầu chương trình

