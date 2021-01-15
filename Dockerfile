FROM squidfunk/mkdocs-material
COPY . /docs
RUN mkdocs build --site-dir dist

FROM nginx:alpine
COPY --from=0 /docs/dist /usr/share/nginx/html