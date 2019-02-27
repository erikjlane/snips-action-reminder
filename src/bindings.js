const handlers = require('./handlers')

module.exports = {
    BINDINGS: [
        {
            intent: 'snips-assistant:SetReminder',
            action: handlers.setReminder
        },
        {
            intent: 'snips-assistant:GetReminders',
            action: handlers.getReminder
        },
        {
            intent: 'snips-assistant:RescheduleReminder',
            action: handlers.rescheduleReminder
        },
        {
            intent: 'snips-assistant:RenameReminder',
            action: handlers.renameReminder
        },
        {
            intent: 'snips-assistant:CancelReminder',
            action: handlers.cancelReminder
        }
    ],
    BUILTIN_INTENTS: [
        'snips-assistant:No',
        'snips-assistant:Stop',
        'snips-assistant:Cancel',
        'snips-assistant:Silence'
    ]
}