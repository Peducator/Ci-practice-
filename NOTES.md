CI không chạy sau khi merge vào master.
Nguyên nhân: ci.yml ghi push: branches: [main], repo dùng nhánh master.
Cách sửa: đổi thành [master], qua PR.
Bài học: tên nhánh trong workflow phải khớp tên nhánh thật; git pull cần nhánh được nối upstream.