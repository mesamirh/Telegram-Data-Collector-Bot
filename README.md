# TelegramDataCollectorBot

TelegramDataCollectorBot is a Node.js-based Telegram bot that facilitates the collection of user-submitted data and logs it into a CSV file. It provides a simple and efficient way to interact with users via Telegram, enabling them to submit data entries which are then securely stored in a structured format.

## Features

- **Data Collection**: Collects user-submitted data via Telegram messages.
- **CSV Logging**: Logs submitted data into a CSV file for easy management.
- **Interactive Messaging**: Engages users with interactive prompts for seamless data submission.
- **Error Handling**: Ensures robustness with error handling for data submission and logging processes.

## Installation

To run the bot locally, follow these steps:

1. Clone the repository: `git clone https://github.com/mesamirh/TelegramDataCollectorBot.git`
2. Install dependencies: `npm install`
3. Set your Telegram bot token in the script (`botToken` variable).
4. Start the bot: `node script.js`

## Usage

1. Start the bot by sending `/start` in your Telegram chat.
2. Follow the bot's instructions to submit data.
3. Data submissions will be logged into `all_user_data.csv`.

## Configuration

- Ensure Node.js and npm are installed.
- Replace `botToken` with your actual Telegram bot token in `index.js`.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the [MIT License](./LICENSE) - see the LICENSE file for details.