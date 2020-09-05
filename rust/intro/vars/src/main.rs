fn main() {
    let spaces = "    ";
    let spaces = spaces.len();

    println!("length: {}", spaces);

    let mut name = "ema";
    println!("before name: {}", name);
    name = "bob";
    println!("after name: {}", name);

    // error
    // spaces = spaces.len();
}
