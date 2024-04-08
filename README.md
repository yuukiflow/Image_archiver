# Image Archiver
Image Archiver is a simpe discord bot that tracks messages with images attached in a given channel and archive them by deleting the origin message and sending it to a new channel.

## Prerequisites

Before proceeding, make sure you have a Discord bot set up. If you haven't done this yet, please follow the [Discord.js documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html) to create and configure your bot.

## Setting Up Environment Variables

To configure the application, create a `.env` file in the root directory of the project with the following variables (See .env.exemple for reference):
```
CLIENT_TOKEN=YOUR_DISCORD_BOT_TOKEN
SOURCE_CHANNEL_ID=YOUR_SOURCE_CHANNEL_ID
DESTINATION_CHANNEL_ID=YOUR_DESTINATION_CHANNEL_ID
EMOJI=YOUR_DESIRED_EMOJI
```

Replace the placeholder values with your actual Discord bot token, source channel ID, destination channel ID, and desired emoji.

## How to Install

1. **Clone this repository:**
    ```sh
    git clone https://github.com/yuukiflow/Image_archiver
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

3. **Run the Application:**
    ```sh
    node main.js
    ```
    



That's it! You're now ready to use the Discord Image Archiver. If you encounter any issues or have questions, feel free to reach out.

