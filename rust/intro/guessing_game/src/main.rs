use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number !!");

    let secret_num = rand::thread_rng().gen_range(1, 101);

    loop {
        println!("Please input your guess.");

        let mut guess_num = String::new();

        io::stdin()
            .read_line(&mut guess_num)
            .expect("Failed to read line");

        let guess_num: u32 = match guess_num.trim().parse() {
            Ok(num) => num,
            Err(invalid) => {
                println!("[!] Error: {}", invalid);
                println!("[!] Please type a number");
                continue;
            }
        };

        println!("You guessed: {}", guess_num);

        match guess_num.cmp(&secret_num) {
            Ordering::Less => println!("Too small"),
            Ordering::Greater => println!("Too big"),
            Ordering::Equal => {
                println!("Congrats !!!");
                println!("The answer: {}", secret_num);
                break;
            }
        }
    }
}
