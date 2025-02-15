require('./config')
const {
    smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

const {
    makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, useMultiFileAuthState, templateMessage
} = require('@whiskeysockets/baileys')

const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const path = require('path')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const { toPTT, toAudio } = require("./lib/converter")

const upchUsage = require('./lib/database/upchUsage.json') || {}

const _cmd = JSON.parse(fs.readFileSync('./lib/database/command.json'))
const _cmdUser = JSON.parse(fs.readFileSync('./lib/database/commandUser.json'))
const { addCountCmd, getPosiCmdUser, addCountCmdUser } = require('./temporary/helpers/command')

// Base
module.exports = Raol404 = async (Raol404, m, chatUpdate, store) => {
    try {
        const from = m.key.remoteJid
        const isGroup = from.endsWith("@g.us")

        var body = (m.mtype === 'conversation') ? m.message.conversation :
            (m.mtype == 'imageMessage') ? m.message.imageMessage.caption :
            (m.mtype == 'videoMessage') ? m.message.videoMessage.caption :
            (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
            (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
            (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
            (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
            (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
            (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
            m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)

        // User
        var isAuthor = global.ownNumb.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
        const botNumber = await Raol404.decodeJid(Raol404.user.id)
        const globalelit = `${global.ownNumb}@s.whatsapp.net`
        const isOwner = globalelit.includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const isCreator = [botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        // Group
        let groupMetadata = null
        let groupName = ''

        if (m.isGroup) {
            try {
                groupMetadata = await Raol404.groupMetadata(m.chat)
                groupName = groupMetadata?.subject || 'Unknown Group'
            } catch (error) {
                console.error('Failed to fetch group metadata:', error)
                groupName = 'Unknown Group'
            }
        }

        const participants = m.isGroup ? (groupMetadata?.participants || []) : []
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : []
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup && groupMetadata ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        // React
        const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻']
        const randomemoji = moji[Math.floor(Math.random() * moji.length)]

        // Réaction automatique
        if (m.message) {
            await Raol404.sendMessage(m.chat, { react: { text: randomemoji, key: m.key } })
        }

    } catch (err) {
        console.error(err)
    }
}
