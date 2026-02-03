# Serve the app folder (static HTML) with nginx
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy app folder contents into nginx web root
COPY app/ /usr/share/nginx/html/

# Expose port 80 (map to 3000 when running: -p 3000:80)
EXPOSE 80

# nginx runs in foreground by default in this image
CMD ["nginx", "-g", "daemon off;"]
