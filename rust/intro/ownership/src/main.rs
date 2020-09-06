fn main() {
    let s = String::from("hello");

    takes_ownership(s);

    // value borrowed here after move
    // println!("s = {}", s);

    let x = 5;

    makes_copy(x);

    println!("x = {}", x);

    let s1 = gives_ownership();
    let s2 = takes_and_gives_back(s1);
    // value borrowed here after move
    // println!("s1 = {}", s1);
    println!("s2 = {}", s2);
}


fn takes_ownership(target: String) {
    println!("String = {}", target);
}

fn makes_copy(target: u32) {
    // original variable is remains 5;
    let mut target = target + 10;
    target += 10;
    println!("u8 = {}", target);
}

fn gives_ownership() -> String {
    let s = String::from("hello");
    s
}

fn takes_and_gives_back(s: String) -> String {
    println!("s = {}", s);
    s
}
