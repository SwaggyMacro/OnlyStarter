import app from 'flarum/app';

app.initializers.add('swaggymacro-admin-topic_starter', (app) => {
    app.extensionData.for('swaggymacro-only-starter')
        .registerSetting({
            setting: 'swaggymacro-only-starter.only_starter',
            label: app.translator.trans('swaggymacro.admin.setting_only_starter'),
            type: 'boolean'
        }).registerSetting({
            setting: 'swaggymacro-only-starter.show_topic_starter',
            label: app.translator.trans('swaggymacro.admin.setting_show_topic_starter'),
            type: 'boolean'
        });
});