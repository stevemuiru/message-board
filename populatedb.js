const { Client } = require("pg");

const SQL =
 `
INSERT INTO TABLE messages(text, username, added) VALUES
 ('Hi there!', 'Amando', NOW()),
 ('Hello World', 'Charles', NOW());
`;

async function main() {
    const client = new Client ({
        connectionString:  "postgresql://madders@localhost/message_board"
    })

    await client.connect();
    await client.query(SQL);
    await client.end()

    console.log("Database populated succesfully!")
}

main();


