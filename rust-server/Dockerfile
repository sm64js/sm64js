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

COPY --from=sm64js/sm64js-build /sm64js/target/release/sm64js ./sm64js
COPY --from=sm64js/sm64js-assets /usr/src/app/dist ./dist

CMD ["./sm64js"]
