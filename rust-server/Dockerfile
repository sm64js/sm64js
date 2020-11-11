FROM debian:buster-slim

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
    pkg-config \
    openssl \
    libssl-dev \
    iproute2 \
    ; \
    \
    rm -rf /var/lib/apt/lists/*;

COPY --from=tarnadas/sm64js-build /sm64js/target/release/sm64js ./sm64js

ENV DOCKER=true
EXPOSE 3030

CMD ["./sm64js"]
