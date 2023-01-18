module.exports = {
    board_env: "STM32F103RC_creality",
    only: "stable",
    active: true,
    meta: {
        stable_name: "ender_3_rct6_4.2.2-{{marlin_version}}-auto_level_5x5-{{uid}}",
        nightly_name: "ender_3_rct6_4.2.2-{{current_date}}-auto_level_5x5-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(DhanOS)"],
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["GRID_MAX_POINTS_X", 5],
            "BLTOUCH",
            "AUTO_BED_LEVELING_BILINEAR",
            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",
            ["Z_MIN_PROBE_PIN", q`PB1`],
            "LCD_BED_LEVELING",
            ["DEFAULT_LEVELING_FADE_HEIGHT", 20],
            ["NOZZLE_TO_PROBE_OFFSET", [-42.5, -5.5, -3.9]],
            "Z_MIN_PROBE_REPEATABILITY_TEST"
        ],
        disable: [
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"
        ]
    },
    configuration_adv: {
        enable: [
            "HOST_ACTION_COMMANDS",
            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",
            ["PROBING_MARGIN_LEFT", 45],
            ["PROBING_MARGIN_RIGHT", 45],
            ["PROBING_MARGIN_FRONT", 15],
            ["PROBING_MARGIN_BACK", 15]
        ],
        disable: []
    }
};