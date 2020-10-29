fn main() {
    prost_build::compile_protos(&["../proto/mario.proto"], &["../proto/"]).unwrap();
}
