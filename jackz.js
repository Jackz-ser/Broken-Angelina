const Shadow = require("../Utilis/events");

const { forwardOrBroadCast } = require("../Utilis/groupmute");

const { getBuffer } = require('../Utilis/download');

const { parseJid } = require("../Utilis/vote");

// JACKZ SER

const url = 'https://i.imgur.com/GaaOZ0e.jpeg'

Shadow.addCommand(

  { pattern: 'jackz ?(.*)', fromMe: true, desc: "Forward replied msg." },

  async (message, match) => {

    if (match == "") return await message.sendMessage("*Give me a jid*\nExample .jackz jid1 jid2 jid3 jid4 ...");

    if (!message.reply_message)

      return await message.sendMessage("*Reply to a Message*");

    const buff = await getBuffer(url)

    let options = {}

    options.ptt = true 

    options.quoted = {

      key: {

        fromMe: false,

        participant: "0@s.whatsapp.net",

        

      },

      message: {

        "orderMessage": {

        	"itemCount" : 66669,             "status": 1,

           "surface" : 1,

           "message": "✰ J A C K Z   S E R ✰",

           "orderTitle": "",

           "thumbnail": buff.buffer,

           "sellerJid": '0@s.whatsapp.net' 

        }

      }

    }

      options.contextInfo = {

           forwardingScore: 999,

           isForwarded: true 

        } 

    options.duration = 61813751819761819758, 

    match.match(parseJid).map((jid) => {

      forwardOrBroadCast(jid, message, options);

    });

  }

);
