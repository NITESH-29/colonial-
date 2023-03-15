FROM chariot-colonial-docker.jfrog.io/colonial/ngb/nginx-angular-base:1.0.0

LABEL \
    org.label-schema.schema-version="rc1" \
    org.label-schema.name="colonial-ui" \
    org.label-schema.description="NGB SPA NG UI" \
    org.label-schema.vendor="Colonial Surety" \
    org.label-schema.url="http://www.colonialsurety.com/" \
    com.colonialsurety.distribution-scope="private" \
    com.colonialsurety.copyright="2018 Colonial Surety" \
    com.colonialsurety.license="All Rights Reserved" \
    com.colonialsurety.blame="Jeffrey Labonski <jlabonski@chariotsolutions.com>"

COPY  --chown=nginx:nginx dist/colonial /static
