# Base image
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package*.json trước để tối ưu layer cache
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose cổng ứng dụng (ví dụ 3000)
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "src/index.js"]
