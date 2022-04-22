<?php

/*
 * This file is part of swaggymacro/only-starter.
 *
 * Copyright (c) 2022 Swaggy Macro.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace SwaggyMacro\OnlyStarter;

use Flarum\Extend;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Extend\Settings;
use Flarum\Settings\SettingsRepositoryInterface;

$settings = resolve(SettingsRepositoryInterface::class);

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
        
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
        
    (new Settings)
        ->serializeToForum('onlyStarter', 'swaggymacro-only-starter.only_starter', null, true)
        ->serializeToForum('showTopicStarter', 'swaggymacro-only-starter.show_topic_starter', null, true),
        
    (new Extend\ApiController(ShowDiscussionController::class))
        ->addInclude('user'),
    
    (new Extend\Locales(__DIR__ . '/resources/locale')),
];
