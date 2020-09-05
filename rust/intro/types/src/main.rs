fn main() {
    let division = 7.0 / 3.0;
    // float
    println!("the answer = {}", division);

    let division = 7 / 3;
    // int
    println!("the answer = {}", division);

    // error
    // let division = 7 / 3.0;
    let division = 7 as f64 / 3.0;
    println!("the answer = {}", division);

    let tup = (1, 10, 100);
    println!("tup: {:?}", tup);
    // pretty-print -> add newlines
    println!("tup: {:#?}", tup);

    let (x, y, z) = tup;
    println!("x = {}, y = {}, z = {}", x, y, z);

    let a1: [u8; 5] = [1, 2, 3, 4, 5];
    println!("a1 = {:?}", a1);

    let a2 = [1; 5];
    println!("a2 = {:?}", a2);
}
