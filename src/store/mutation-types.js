// Main

export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME'
export const TOGGLE_SUPPORT_CHAT = 'TOGGLE_SUPPORT_CHAT'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_USER_MENU = 'TOGGLE_USER_MENU'
export const SET_CONFIG = 'SET_CONFIG'
export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION'
export const SET_LAST_PRODUCTION_SCREEN = 'SET_LAST_PRODUCTION_SCREEN'
export const SHOW_PREVIEW_FILE = 'SHOW_PREVIEW_FILE'
export const HIDE_PREVIEW_FILE = 'HIDE_PREVIEW_FILE'

// People

export const LOAD_PEOPLE_START = 'LOAD_PEOPLE_START'
export const LOAD_PEOPLE_END = 'LOAD_PEOPLE_END'
export const LOAD_PEOPLE_ERROR = 'LOAD_PEOPLE_ERROR'

export const NEW_PEOPLE_END = 'NEW_PEOPLE_END'
export const PERSON_CSV_FILE_SELECTED = 'PERSON_CSV_FILE_SELECTED'
export const IMPORT_PEOPLE_START = 'IMPORT_PEOPLE_START'
export const IMPORT_PEOPLE_END = 'IMPORT_PEOPLE_END'
export const IMPORT_PEOPLE_ERROR = 'IMPORT_PEOPLE_ERROR'

export const DELETE_PEOPLE_END = 'DELETE_PEOPLE_END'

export const EDIT_PEOPLE_START = 'EDIT_PEOPLE_START'
export const EDIT_PEOPLE_END = 'EDIT_PEOPLE_END'
export const EDIT_PEOPLE_ERROR = 'EDIT_PEOPLE_ERROR'
export const SHOW_EDIT_PEOPLE_MODAL = 'SHOW_EDIT_PEOPLE_MODAL'
export const HIDE_EDIT_PEOPLE_MODAL = 'HIDE_EDIT_PEOPLE_MODAL'

export const LOAD_PERSON_TASKS_END = 'LOAD_PERSON_TASKS_END'
export const LOAD_PERSON_DONE_TASKS_END = 'LOAD_PERSON_DONE_TASKS_END'
export const SET_PERSON_TASKS_SEARCH = 'SET_PERSON_TASKS_SEARCH'
export const SAVE_PERSON_TASKS_SEARCH_END = 'SAVE_PERSON_TASKS_SEARCH_END'
export const REMOVE_PERSON_TASKS_SEARCH_END = 'REMOVE_PERSON_TASKS_SEARCH_END'

export const SET_TIME_SPENT = 'SET_TIME_SPENT'
export const PEOPLE_TIMESHEET_LOADED = 'PEOPLE_TIMESHEET_LOADED'
export const PEOPLE_SET_DAY_OFFS = 'PEOPLE_SET_DAY_OFFS'
export const PEOPLE_SET_DAYS_OFF = 'PEOPLE_SET_DAYS_OFF'
export const PERSON_LOAD_TIME_SPENTS_END = 'PERSON_LOAD_TIME_SPENTS_END'
export const PERSON_SET_DAY_OFF = 'PERSON_SET_DAY_OFF'
export const SET_PERSON_TASKS_SCROLL_POSITION =
  'SET_PERSON_TASKS_SCROLL_POSITION'

export const PEOPLE_SEARCH_CHANGE = 'PEOPLE_SEARCH_CHANGE'
export const REMOVE_PEOPLE_SEARCH_END = 'REMOVE_PEOPLE_SEARCH_END'
export const SAVE_PEOPLE_SEARCH_END = 'SAVE_PEOPLE_SEARCH_END'

export const SET_ORGANISATION = 'SET_ORGANISATION'

export const DISABLE_TWO_FACTOR_AUTHENTICATION_END =
  'DISABLE_TWO_FACTOR_AUTHENTICATION_END'

// User

export const USER_SAVE_PROFILE_LOADING = 'USER_SAVE_PROFILE_LOADING'
export const USER_SAVE_PROFILE_ERROR = 'USER_SAVE_PROFILE_ERROR'
export const USER_SAVE_PROFILE_SUCCESS = 'USER_SAVE_PROFILE_SUCCESS'

export const CHANGE_AVATAR_FILE = 'CHANGE_AVATAR_FILE'
export const UPLOAD_AVATAR_START = 'UPLOAD_AVATAR_START'
export const UPLOAD_AVATAR_END = 'UPLOAD_AVATAR_END'
export const UPLOAD_AVATAR_ERROR = 'UPLOAD_AVATAR_ERROR'
export const CLEAR_AVATAR = 'CLEAR_AVATAR'

export const USER_CHANGE_PASSWORD_LOADING = 'USER_CHANGE_PASSWORD_LOADING'
export const USER_CHANGE_PASSWORD_ERROR = 'USER_CHANGE_PASSWORD_ERROR'
export const USER_CHANGE_PASSWORD_SUCCESS = 'USER_CHANGE_PASSWORD_SUCCESS'
export const USER_CHANGE_PASSWORD_UNVALID = 'USER_CHANGE_PASSWORD_UNVALID'

export const USER_ENABLE_TOTP_SUCCESS = 'USER_ENABLE_TOTP_SUCCESS'
export const USER_DISABLE_TOTP_SUCCESS = 'USER_DISABLE_TOTP_SUCCESS'
export const USER_ENABLE_EMAIL_OTP_SUCCESS = 'USER_ENABLE_EMAIL_OTP_SUCCESS'
export const USER_DISABLE_EMAIL_OTP_SUCCESS = 'USER_DISABLE_EMAIL_OTP_SUCCESS'
export const USER_REGISTER_FIDO_SUCCESS = 'USER_REGISTER_FIDO_SUCCESS'
export const USER_UNREGISTER_FIDO_SUCCESS = 'USER_UNREGISTER_FIDO_SUCCESS'

export const USER_LOAD_TODOS_END = 'USER_LOAD_TODOS_END'
export const USER_LOAD_TODOS_START = 'USER_LOAD_TODOS_START'
export const USER_LOAD_TODOS_ERROR = 'USER_LOAD_TODOS_ERROR'
export const USER_LOAD_DONE_TASKS_END = 'USER_LOAD_DONE_TASKS_END'
export const USER_LOAD_TIME_SPENTS_END = 'USER_LOAD_TIME_SPENTS_END'
export const REGISTER_USER_TASKS = 'REGISTER_USER_TASKS'

export const SET_TODOS_SEARCH = 'SET_TODOS_SEARCH'

export const LOAD_USER_FILTERS_END = 'LOAD_USER_FILTERS_END'
export const LOAD_USER_FILTERS_ERROR = 'LOAD_USER_FILTERS_ERROR'
export const UPDATE_USER_FILTER = 'UPDATE_USER_FILTER'
export const LOAD_USER_FILTER_GROUPS_END = 'LOAD_USER_FILTER_GROUPS_END'
export const LOAD_USER_FILTER_GROUPS_ERROR = 'LOAD_USER_FILTER_GROUPS_ERROR'
export const UPDATE_USER_FILTER_GROUP = 'UPDATE_USER_FILTER_GROUP'

export const SET_TODO_LIST_SCROLL_POSITION = 'SET_TODO_LIST_SCROLL_POSITION'

// Tasks

export const LOAD_TASK_END = 'LOAD_TASK_END'
export const NEW_TASK_COMMENT_END = 'NEW_TASK_COMMENT_END'
export const NEW_TASK_END = 'NEW_TASK_END'
export const EDIT_TASK_END = 'EDIT_TASK_END'
export const EDIT_TASK_DATES = 'EDIT_TASK_DATES'
export const LOAD_TASK_COMMENTS_END = 'LOAD_TASK_COMMENTS_END'
export const LOAD_TASK_ENTITY_PREVIEW_FILES_END =
  'LOAD_TASK_ENTITY_PREVIEW_FILES_END'
export const CREATE_TASKS_END = 'CREATE_TASKS_END'
export const DELETE_TASK_END = 'DELETE_TASK_END'
export const EDIT_COMMENT_END = 'EDIT_COMMENT_END'
export const DELETE_COMMENT_END = 'DELETE_COMMENT_END'
export const PIN_COMMENT = 'PIN_COMMENT'
export const ACK_COMMENT = 'ACK_COMMENT'
export const ADD_REPLY_TO_COMMENT = 'ADD_REPLY_TO_COMMENT'
export const REMOVE_REPLY_FROM_COMMENT = 'REMOVE_REPLY_FROM_COMMENT'
export const UPDATE_TASK = 'UPDATE_TASK'

export const PREVIEW_FILE_SELECTED = 'PREVIEW_FILE_SELECTED'
export const ADD_PREVIEW_START = 'ADD_PREVIEW_START'
export const ADD_PREVIEW_END = 'ADD_PREVIEW_END'
export const DELETE_PREVIEW_END = 'DELETE_PREVIEW_END'
export const CHANGE_PREVIEW_END = 'CHANGE_PREVIEW_END'
export const UPDATE_PREVIEW_ANNOTATION = 'UPDATE_PREVIEW_ANNOTATION'
export const UPDATE_PREVIEW_VALIDATION_STATUS =
  'UPDATE_PREVIEW_VALIDATION_STATUS'
export const ADD_ANNOTATION = 'ADD_ANNOTATION'
export const UPDATE_ANNOTATION = 'UPDATE_ANNOTATION'

export const ADD_SELECTED_TASK = 'ADD_SELECTED_TASK'
export const ADD_SELECTED_TASKS = 'ADD_SELECTED_TASKS'
export const REMOVE_SELECTED_TASK = 'REMOVE_SELECTED_TASK'
export const CLEAR_SELECTED_TASKS = 'CLEAR_SELECTED_TASKS'

export const ASSIGN_TASKS = 'ASSIGN_TASKS'
export const UNASSIGN_TASK = 'UNASSIGN_TASK'
export const UNASSIGN_TASKS = 'UNASSIGN_TASKS'

export const SAVE_TASK_SEARCH_END = 'SAVE_TASK_SEARCH_END'
export const REMOVE_TASK_SEARCH_END = 'REMOVE_TASK_SEARCH_END'

export const REMOVE_TASK_COMMENT = 'REMOVE_TASK_COMMENT'
export const UPDATE_COMMENT_CHECKLIST = 'UPDATE_COMMENT_CHECKLIST'
export const UPDATE_COMMENT_REPLIES = 'UPDATE_COMMENT_REPLIES'
export const UPDATE_REVISION_PREVIEW_POSITION =
  'UPDATE_REVISION_PREVIEW_POSITION'
export const SET_UPLOAD_PROGRESS = 'SET_UPLOAD_PROGRESS'
export const CLEAR_UPLOAD_PROGRESS = 'CLEAR_UPLOAD_PROGRESS'
export const SET_TASK_EXTRA_DATA = 'SET_TASK_EXTRA_DATA'

// Productions

export const LOAD_PRODUCTIONS_START = 'LOAD_PRODUCTIONS_START'
export const LOAD_PRODUCTIONS_END = 'LOAD_PRODUCTIONS_END'
export const LOAD_PRODUCTIONS_ERROR = 'LOAD_PRODUCTIONS_ERROR'

export const ADD_PRODUCTION = 'ADD_PRODUCTION'
export const UPDATE_PRODUCTION = 'UPDATE_PRODUCTION'
export const REMOVE_PRODUCTION = 'REMOVE_PRODUCTION'

export const LOAD_OPEN_PRODUCTIONS_START = 'LOAD_OPEN_PRODUCTIONS_START'
export const LOAD_OPEN_PRODUCTIONS_END = 'LOAD_OPEN_PRODUCTIONS_END'
export const LOAD_OPEN_PRODUCTIONS_ERROR = 'LOAD_OPEN_PRODUCTIONS_ERROR'

export const LOAD_PRODUCTION_STATUS_START = 'LOAD_PRODUCTION_STATUS_START'
export const LOAD_PRODUCTION_STATUS_END = 'LOAD_PRODUCTION_STATUS_END'
export const LOAD_PRODUCTION_STATUS_ERROR = 'LOAD_PRODUCTION_STATUS_ERROR'

export const SET_CURRENT_PRODUCTION = 'SET_CURRENT_PRODUCTION'

export const PRODUCTION_PICTURE_FILE_SELECTED =
  'PRODUCTION_PICTURE_FILE_SELECTED'
export const PRODUCTION_AVATAR_UPLOADED = 'PRODUCTION_AVATAR_UPLOADED'

export const TEAM_ADD_PERSON = 'TEAM_ADD_PERSON'
export const TEAM_REMOVE_PERSON = 'TEAM_REMOVE_PERSON'
export const PRODUCTION_ADD_ASSET_TYPE = 'PRODUCTION_ADD_ASSET_TYPE'
export const PRODUCTION_REMOVE_ASSET_TYPE = 'PRODUCTION_REMOVE_ASSET_TYPE'
export const PRODUCTION_ADD_BACKGROUND = 'PRODUCTION_ADD_BACKGROUND'
export const PRODUCTION_REMOVE_BACKGROUND = 'PRODUCTION_REMOVE_BACKGROUND'
export const PRODUCTION_UPDATE_DEFAULT_BACKGROUND =
  'PRODUCTION_UPDATE_DEFAULT_BACKGROUND'
export const PRODUCTION_ADD_TASK_TYPE = 'PRODUCTION_ADD_TASK_TYPE'
export const PRODUCTION_REMOVE_TASK_TYPE = 'PRODUCTION_REMOVE_TASK_TYPE'
export const PRODUCTION_ADD_TASK_STATUS = 'PRODUCTION_ADD_TASK_STATUS'
export const PRODUCTION_REMOVE_TASK_STATUS = 'PRODUCTION_REMOVE_TASK_STATUS'
export const PRODUCTION_ADD_STATUS_AUTOMATION =
  'PRODUCTION_ADD_STATUS_AUTOMATION'
export const PRODUCTION_REMOVE_STATUS_AUTOMATION =
  'PRODUCTION_REMOVE_STATUS_AUTOMATION'

export const ADD_METADATA_DESCRIPTOR_END = 'ADD_METADATA_DESCRIPTOR_END'
export const UPDATE_METADATA_DESCRIPTOR_END = 'UPDATE_METADATA_DESCRIPTOR_END'
export const DELETE_METADATA_DESCRIPTOR_END = 'DELETE_METADATA_DESCRIPTOR_END'

export const ADD_ATTACHMENT_TO_COMMENT = 'ADD_ATTACHMENT_TO_COMMENT'
export const REMOVE_ATTACHMENT_FROM_COMMENT = 'REMOVE_ATTACHMENT_FROM_COMMENT'

// Task types

export const LOAD_TASK_TYPES_START = 'LOAD_TASK_TYPES_START'
export const LOAD_TASK_TYPES_END = 'LOAD_TASK_TYPES_END'
export const LOAD_TASK_TYPES_ERROR = 'LOAD_TASK_TYPES_ERROR'

export const NEW_TASK_TYPE_END = 'NEW_TASK_TYPE_END'

export const EDIT_TASK_TYPE_START = 'EDIT_TASK_TYPE_START'
export const EDIT_TASK_TYPE_END = 'EDIT_TASK_TYPE_END'
export const EDIT_TASK_TYPE_ERROR = 'EDIT_TASK_TYPE_ERROR'

export const DELETE_TASK_TYPE_START = 'DELETE_TASK_TYPE_START'
export const DELETE_TASK_TYPE_END = 'DELETE_TASK_TYPE_END'
export const DELETE_TASK_TYPE_ERROR = 'DELETE_TASK_TYPE_ERROR'

export const SORT_VALIDATION_COLUMNS = 'SORT_VALIDATION_COLUMNS'

// Task status

export const LOAD_TASK_STATUSES_START = 'LOAD_TASK_STATUSES_START'
export const LOAD_TASK_STATUSES_END = 'LOAD_TASK_STATUSES_END'
export const LOAD_TASK_STATUSES_ERROR = 'LOAD_TASK_STATUSES_ERROR'

export const NEW_TASK_STATUS_END = 'NEW_TASK_STATUS_END'

export const EDIT_TASK_STATUS_START = 'EDIT_TASK_STATUS_START'
export const EDIT_TASK_STATUS_END = 'EDIT_TASK_STATUS_END'
export const EDIT_TASK_STATUS_ERROR = 'EDIT_TASK_STATUS_ERROR'

export const DELETE_TASK_STATUS_START = 'DELETE_TASK_STATUS_START'
export const DELETE_TASK_STATUS_END = 'DELETE_TASK_STATUS_END'
export const DELETE_TASK_STATUS_ERROR = 'DELETE_TASK_STATUS_ERROR'

// Custom Actions

export const LOAD_CUSTOM_ACTIONS_START = 'LOAD_CUSTOM_ACTIONS_START'
export const LOAD_CUSTOM_ACTIONS_END = 'LOAD_CUSTOM_ACTIONS_END'
export const LOAD_CUSTOM_ACTIONS_ERROR = 'LOAD_CUSTOM_ACTIONS_ERROR'

export const NEW_CUSTOM_ACTION_END = 'NEW_CUSTOM_ACTION_END'

export const EDIT_CUSTOM_ACTION_START = 'EDIT_CUSTOM_ACTION_START'
export const EDIT_CUSTOM_ACTION_END = 'EDIT_CUSTOM_ACTION_END'
export const EDIT_CUSTOM_ACTION_ERROR = 'EDIT_CUSTOM_ACTION_ERROR'

export const DELETE_CUSTOM_ACTION_START = 'DELETE_CUSTOM_ACTION_START'
export const DELETE_CUSTOM_ACTION_END = 'DELETE_CUSTOM_ACTION_END'
export const DELETE_CUSTOM_ACTION_ERROR = 'DELETE_CUSTOM_ACTION_ERROR'

// Status Automations

export const LOAD_STATUS_AUTOMATIONS_START = 'LOAD_STATUS_AUTOMATIONS_START'
export const LOAD_STATUS_AUTOMATIONS_END = 'LOAD_STATUS_AUTOMATIONS_END'
export const LOAD_STATUS_AUTOMATIONS_ERROR = 'LOAD_STATUS_AUTOMATIONS_ERROR'

export const NEW_STATUS_AUTOMATION_END = 'NEW_STATUS_AUTOMATION_END'

export const EDIT_STATUS_AUTOMATION_START = 'EDIT_STATUS_AUTOMATION_START'
export const EDIT_STATUS_AUTOMATION_END = 'EDIT_STATUS_AUTOMATION_END'
export const EDIT_STATUS_AUTOMATION_ERROR = 'EDIT_STATUS_AUTOMATION_ERROR'

export const DELETE_STATUS_AUTOMATION_START = 'DELETE_STATUS_AUTOMATION_START'
export const DELETE_STATUS_AUTOMATION_END = 'DELETE_STATUS_AUTOMATION_END'
export const DELETE_STATUS_AUTOMATION_ERROR = 'DELETE_STATUS_AUTOMATION_ERROR'

// Asset types

export const LOAD_ASSET_TYPES_START = 'LOAD_ASSET_TYPES_START'
export const LOAD_ASSET_TYPES_END = 'LOAD_ASSET_TYPES_END'
export const LOAD_ASSET_TYPES_ERROR = 'LOAD_ASSET_TYPES_ERROR'

export const NEW_ASSET_TYPE_END = 'NEW_ASSET_TYPE_END'

export const EDIT_ASSET_TYPE_START = 'EDIT_ASSET_TYPE_START'
export const EDIT_ASSET_TYPE_END = 'EDIT_ASSET_TYPE_END'
export const EDIT_ASSET_TYPE_ERROR = 'EDIT_ASSET_TYPE_ERROR'

export const DELETE_ASSET_TYPE_START = 'DELETE_ASSET_TYPE_START'
export const DELETE_ASSET_TYPE_END = 'DELETE_ASSET_TYPE_END'
export const DELETE_ASSET_TYPE_ERROR = 'DELETE_ASSET_TYPE_ERROR'

export const SET_ASSET_LIST_SCROLL_POSITION = 'SET_ASSET_LIST_SCROLL_POSITION'
export const SET_PRODUCTION_ASSET_TYPE_LIST_SCROLL_POSITION =
  'SET_PRODUCTION_ASSET_TYPE_LIST_SCROLL_POSITION'

// Departments

export const LOAD_DEPARTMENTS_END = 'LOAD_DEPARTMENTS_END'
export const NEW_DEPARTMENTS_END = 'NEW_DEPARTMENTS_END'
export const EDIT_DEPARTMENTS_END = 'EDIT_DEPARTMENTS_END'
export const DELETE_DEPARTMENTS_END = 'DELETE_DEPARTMENTS_END'

// Studios

export const LOAD_STUDIOS_END = 'LOAD_STUDIOS_END'
export const EDIT_STUDIOS_END = 'EDIT_STUDIOS_END'
export const DELETE_STUDIOS_END = 'DELETE_STUDIOS_END'

// Assets

export const CLEAR_ASSETS = 'CLEAR_ASSETS'

export const LOAD_ASSETS_START = 'LOAD_ASSETS_START'
export const LOAD_ASSETS_END = 'LOAD_ASSETS_END'
export const LOAD_ASSETS_ERROR = 'LOAD_ASSETS_ERROR'
export const LOAD_ASSET_END = 'LOAD_ASSET_END'
export const LOAD_ASSET_CAST_IN_END = 'LOAD_ASSET_CAST_IN_END'

export const ASSET_CSV_FILE_SELECTED = 'ASSET_CSV_FILE_SELECTED'
export const IMPORT_ASSETS_START = 'IMPORT_ASSETS_START'
export const IMPORT_ASSETS_END = 'IMPORT_ASSETS_END'
export const IMPORT_ASSETS_ERROR = 'IMPORT_ASSETS_ERROR'

export const NEW_ASSET_END = 'NEW_ASSET_END'

export const EDIT_ASSET_START = 'EDIT_ASSET_START'
export const EDIT_ASSET_END = 'EDIT_ASSET_END'
export const EDIT_ASSET_ERROR = 'EDIT_ASSET_ERROR'

export const DELETE_ASSET_START = 'DELETE_ASSET_START'
export const DELETE_ASSET_END = 'DELETE_ASSET_END'
export const DELETE_ASSET_ERROR = 'DELETE_ASSET_ERROR'

export const RESTORE_ASSET_START = 'RESTORE_ASSET_START'
export const RESTORE_ASSET_END = 'RESTORE_ASSET_END'
export const RESTORE_ASSET_ERROR = 'RESTORE_ASSET_ERROR'

export const SET_ASSET_SEARCH = 'SET_ASSET_SEARCH'
export const SAVE_ASSET_SEARCH_END = 'SAVE_ASSET_SEARCH_END'
export const REMOVE_ASSET_SEARCH_END = 'REMOVE_ASSET_SEARCH_END'
export const DISPLAY_MORE_ASSETS = 'DISPLAY_MORE_ASSETS'

export const SET_SHARED_ASSET_SEARCH = 'SET_SHARED_ASSET_SEARCH'

export const SAVE_ASSET_SEARCH_FILTER_GROUP_END =
  'SAVE_ASSET_SEARCH_FILTER_GROUP_END'
export const REMOVE_ASSET_SEARCH_FILTER_GROUP_END =
  'REMOVE_ASSET_SEARCH_FILTER_GROUP_END'

export const COMPUTE_ASSET_TYPE_STATS = 'COMPUTE_ASSET_TYPE_STATS'
export const SET_ASSET_TYPE_SEARCH = 'SET_ASSET_TYPE_SEARCH'

export const ADD_ASSET = 'ADD_ASSET'
export const UPDATE_ASSET = 'UPDATE_ASSET'
export const REMOVE_ASSET = 'REMOVE_ASSET'
export const CANCEL_ASSET = 'CANCEL_ASSET'

export const CHANGE_ASSET_SORT = 'CHANGE_ASSET_SORT'
export const LOCK_ASSET = 'LOCK_ASSET'
export const UNLOCK_ASSET = 'UNLOCK_ASSET'

export const CLEAR_SELECTED_ASSETS = 'CLEAR_SELECTED_ASSETS'
export const SET_ASSET_SELECTION = 'SET_ASSET_SELECTION'

// Shots

export const CLEAR_SHOTS = 'CLEAR_SHOTS'

export const LOAD_SHOTS_START = 'LOAD_SHOTS_START'
export const LOAD_SHOTS_END = 'LOAD_SHOTS_END'
export const LOAD_SHOTS_ERROR = 'LOAD_SHOTS_ERROR'
export const LOAD_SEQUENCES_END = 'LOAD_SEQUENCES_END'
export const LOAD_EPISODES_START = 'LOAD_EPISODES_START'
export const LOAD_EPISODES_END = 'LOAD_EPISODES_END'
export const LOAD_EPISODES_ERROR = 'LOAD_EPISODES_ERROR'
export const LOAD_SHOT_END = 'LOAD_SHOT_END'
export const LOAD_SEQUENCE_CASTING_END = 'LOAD_SEQUENCE_CASTING_END'
export const LOAD_EPISODE_CASTING_END = 'LOAD_EPISODE_CASTING_END'
export const LOAD_SHOT_CASTING_END = 'LOAD_SHOT_CASTING_END'
export const LOAD_ASSET_CASTING_END = 'LOAD_ASSET_CASTING_END'

export const SHOT_CSV_FILE_SELECTED = 'SHOT_CSV_FILE_SELECTED'
export const IMPORT_SHOTS_START = 'IMPORT_SHOTS_START'
export const IMPORT_SHOTS_END = 'IMPORT_SHOTS_END'
export const IMPORT_SHOTS_ERROR = 'IMPORT_SHOTS_ERROR'

export const EDIT_SHOT_START = 'EDIT_SHOT_START'
export const EDIT_SHOT_END = 'EDIT_SHOT_END'
export const EDIT_SHOT_ERROR = 'EDIT_SHOT_ERROR'

export const EDIT_SEQUENCE_START = 'EDIT_SEQUENCE_START'
export const EDIT_SEQUENCE_END = 'EDIT_SEQUENCE_END'
export const EDIT_SEQUENCE_ERROR = 'EDIT_SEQUENCE_ERROR'

export const EDIT_EPISODE_START = 'EDIT_EPISODE_START'
export const EDIT_EPISODE_END = 'EDIT_EPISODE_END'
export const EDIT_EPISODE_ERROR = 'EDIT_EPISODE_ERROR'

export const NEW_SHOT_START = 'NEW_SHOT_START'
export const NEW_SHOT_END = 'NEW_SHOT_END'
export const NEW_SHOT_ERROR = 'NEW_SHOT_ERROR'

export const NEW_SEQUENCE_START = 'NEW_SEQUENCE_START'
export const NEW_SEQUENCE_END = 'NEW_SEQUENCE_END'
export const NEW_SEQUENCE_ERROR = 'NEW_SEQUENCE_ERROR'

export const NEW_EPISODE_START = 'NEW_EPISODE_START'
export const NEW_EPISODE_END = 'NEW_EPISODE_END'
export const NEW_EPISODE_ERROR = 'NEW_EPISODE_ERROR'

export const DELETE_SHOT_START = 'DELETE_SHOT_START'
export const DELETE_SHOT_END = 'DELETE_SHOT_END'
export const DELETE_SHOT_ERROR = 'DELETE_SHOT_ERROR'

export const DELETE_SEQUENCE_START = 'DELETE_SEQUENCE_START'
export const DELETE_SEQUENCE_END = 'DELETE_SEQUENCE_END'
export const DELETE_SEQUENCE_ERROR = 'DELETE_SEQUENCE_ERROR'

export const DELETE_EPISODE_START = 'DELETE_EPISODE_START'
export const DELETE_EPISODE_END = 'DELETE_EPISODE_END'
export const DELETE_EPISODE_ERROR = 'DELETE_EPISODE_ERROR'

export const RESTORE_SHOT_START = 'RESTORE_SHOT_START'
export const RESTORE_SHOT_END = 'RESTORE_SHOT_END'
export const RESTORE_SHOT_ERROR = 'RESTORE_SHOT_ERROR'

export const ADD_EPISODE = 'ADD_EPISODE'
export const UPDATE_EPISODE = 'UPDATE_EPISODE'
export const REMOVE_EPISODE = 'REMOVE_EPISODE'
export const ADD_EPISODE_SEARCH = 'ADD_EPISODE_SEARCH'
export const REMOVE_EPISODE_SEARCH = 'REMOVE_EPISODE_SEARCH'
export const DISPLAY_MORE_EPISODES = 'DISPLAY_MORE_EPISODES'

export const ADD_SEQUENCE = 'ADD_SEQUENCE'
export const UPDATE_SEQUENCE = 'UPDATE_SEQUENCE'
export const REMOVE_SEQUENCE = 'REMOVE_SEQUENCE'

export const ADD_SHOT = 'ADD_SHOT'
export const UPDATE_SHOT = 'UPDATE_SHOT'
export const REMOVE_SHOT = 'REMOVE_SHOT'
export const CANCEL_SHOT = 'CANCEL_SHOT'

export const SET_SHOT_SEARCH = 'SET_SHOT_SEARCH'
export const SAVE_SHOT_SEARCH_END = 'SAVE_SHOT_SEARCH_END'
export const REMOVE_SHOT_SEARCH_END = 'REMOVE_SHOT_SEARCH_END'

export const SET_SEQUENCE_SEARCH = 'SET_SEQUENCE_SEARCH'
export const SET_SEQUENCE_STATS_SEARCH = 'SET_SEQUENCE_STATS_SEARCH'
export const SAVE_SEQUENCE_SEARCH_END = 'SAVE_SEQUENCE_SEARCH_END'
export const REMOVE_SEQUENCE_SEARCH_END = 'REMOVE_SEQUENCE_SEARCH_END'
export const SET_EPISODE_SEARCH = 'SET_EPISODE_SEARCH'

export const DISPLAY_MORE_SHOTS = 'DISPLAY_MORE_SHOTS'
export const DISPLAY_MORE_SEQUENCES = 'DISPLAY_MORE_SEQUENCES'

export const SAVE_SHOT_SEARCH_FILTER_GROUP_END =
  'SAVE_SHOT_SEARCH_FILTER_GROUP_END'
export const REMOVE_SHOT_SEARCH_FILTER_GROUP_END =
  'REMOVE_SHOT_SEARCH_FILTER_GROUP_END'

export const SET_SHOT_LIST_SCROLL_POSITION = 'SET_SHOT_LIST_SCROLL_POSITION'
export const SET_SEQUENCE_LIST_SCROLL_POSITION =
  'SET_SEQUENCE_LIST_SCROLL_POSITION'
export const SET_EPISODE_LIST_SCROLL_POSITION =
  'SET_EPISODE_LIST_SCROLL_POSITION'
export const SET_EDIT_LIST_SCROLL_POSITION = 'SET_EDIT_LIST_SCROLL_POSITION'

export const COMPUTE_SEQUENCE_STATS = 'COMPUTE_SEQUENCE_STATS'
export const COMPUTE_EPISODE_STATS = 'COMPUTE_EPISODE_STATS'
export const SET_CURRENT_EPISODE = 'SET_CURRENT_EPISODE'
export const CLEAR_EPISODES = 'CLEAR_EPISODES'
export const SET_EPISODE_STATS = 'SET_EPISODE_STATS'
export const SET_EPISODE_RETAKE_STATS = 'SET_EPISODE_RETAKE_STATS'
export const RESET_PRODUCTION_PATH = 'RESET_PRODUCTION_PATH'

export const DATA_LOADING_START = 'DATA_LOADING_START'
export const DATA_LOADING_END = 'DATA_LOADING_END'

export const CHANGE_SHOT_SORT = 'CHANGE_SHOT_SORT'

export const LOCK_SHOT = 'LOCK_SHOT'
export const UNLOCK_SHOT = 'UNLOCK_SHOT'

export const LOCK_SEQUENCE = 'LOCK_SEQUENCE'
export const UNLOCK_SEQUENCE = 'UNLOCK_SEQUENCE'

export const CHANGE_EPISODE_SORT = 'CHANGE_EPISODE_SORT'
export const RESET_SEQUENCES = 'RESET_SEQUENCES'

// Profile and auth

export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const LOGIN_RUN = 'LOGIN_RUN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const SAVE_TODO_SEARCH_END = 'SAVE_TODO_SEARCH_END'
export const REMOVE_TODO_SEARCH_END = 'REMOVE_TODO_SEARCH_END'

export const CLEAR_SELECTED_SHOTS = 'CLEAR_SELECTED_SHOTS'
export const SET_SHOT_SELECTION = 'SET_SHOT_SELECTION'

export const CLEAR_SELECTED_EPISODES = 'CLEAR_SELECTED_EPISODES'
export const SET_EPISODE_SELECTION = 'SET_EPISODE_SELECTION'
export const SET_EPISODES_WITH_TASKS = 'SET_EPISODES_WITH_TASKS'

// Casting

export const CASTING_SET_SHOT = 'CASTING_SET_SHOT'
export const CASTING_SET_SEQUENCE = 'CASTING_SET_SEQUENCE'
export const CASTING_SET_EPISODE = 'CASTING_SET_EPISODE'
export const CASTING_SET_EPISODES = 'CASTING_SET_EPISODES'
export const CASTING_SET_FOR_EPISODES = 'CASTING_SET_FOR_EPISODES'
export const CASTING_SET_CASTING = 'CASTING_SET_CASTING'
export const CASTING_SET_SHOTS = 'CASTING_SET_SHOTS'
export const CASTING_SET_SEQUENCES = 'CASTING_SET_SEQUENCES'
export const CASTING_SET_ASSET_TYPES = 'CASTING_SET_ASSET_TYPES'
export const CASTING_SET_ASSET_TYPE = 'CASTING_SET_ASSET_TYPE'
export const CASTING_SET_ASSETS = 'CASTING_SET_ASSETS'

export const CASTING_ADD_TO_CASTING = 'CASTING_ADD_TO_CASTING'
export const CASTING_REMOVE_FROM_CASTING = 'CASTING_REMOVE_FROM_CASTING'
export const CASTING_SET_LINK_LABEL = 'CASTING_SET_LINK_LABEL'
export const CASTING_SET_ENTITY_CASTING = 'CASTING_SET_ENTITY_CASTING'

// Playlists

export const LOAD_PLAYLISTS_START = 'LOAD_PLAYLISTS_START'
export const LOAD_PLAYLISTS_END = 'LOAD_PLAYLISTS_END'
export const LOAD_PLAYLISTS_ERROR = 'LOAD_PLAYLISTS_ERROR'

export const LOAD_PLAYLIST_START = 'LOAD_PLAYLIST_START'
export const LOAD_PLAYLIST_END = 'LOAD_PLAYLIST_END'
export const LOAD_PLAYLIST_ERROR = 'LOAD_PLAYLIST_ERROR'

export const NEW_PLAYLIST_END = 'NEW_PLAYLIST_END'

export const EDIT_PLAYLIST_START = 'EDIT_PLAYLIST_START'
export const EDIT_PLAYLIST_END = 'EDIT_PLAYLIST_END'
export const EDIT_PLAYLIST_ERROR = 'EDIT_PLAYLIST_ERROR'

export const DELETE_PLAYLIST_START = 'DELETE_PLAYLIST_START'
export const DELETE_PLAYLIST_END = 'DELETE_PLAYLIST_END'
export const DELETE_PLAYLIST_ERROR = 'DELETE_PLAYLIST_ERROR'

export const ADD_ENTITY_TO_PLAYLIST = 'ADD_ENTITY_TO_PLAYLIST'
export const REMOVE_ENTITY_FROM_PLAYLIST = 'REMOVE_ENTITY_FROM_PLAYLIST'
export const CHANGE_PLAYLIST_PREVIEW = 'CHANGE_PLAYLIST_PREVIEW'
export const CHANGE_PLAYLIST_ORDER = 'CHANGE_PLAYLIST_ORDER'
export const CHANGE_PLAYLIST_TYPE = 'CHANGE_PLAYLIST_TYPE'
export const LOAD_ENTITY_PREVIEW_FILES_END = 'LOAD_ENTITY_PREVIEW_FILES_END'

export const ADD_NEW_JOB = 'ADD_NEW_JOB'
export const MARK_JOB_AS_DONE = 'MARK_JOB_AS_DONE'
export const REMOVE_BUILD_JOB = 'REMOVE_BUILD_JOB'

export const ADD_PLAYLISTS = 'ADD_PLAYLISTS'

// Notifications

export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS'
export const INCREMENT_NOTIFICATION_COUNTER = 'INCREMENT_NOTIFICATION_COUNTER'
export const LOAD_MORE_NOTIFICATIONS_END = 'LOAD_MORE_NOTIFICATIONS_END'
export const LOAD_NOTIFICATIONS_END = 'LOAD_NOTIFICATIONS_END'
export const LOAD_NOTIFICATION_END = 'LOAD_NOTIFICATION_END'
export const LOAD_TASK_SUBSCRIBE_END = 'LOAD_TASK_SUBSCRIBE_END'
export const LOAD_SEQUENCE_SUBSCRIBE_END = 'LOAD_SEQUENCE_SUBSCRIBE_END'
export const LOAD_SEQUENCE_SUBSCRIPTION_END = 'LOAD_SEQUENCE_SUBSCRIPTION_END'
export const MARK_ALL_NOTIFICATIONS_AS_READ = 'MARK_ALL_NOTIFICATIONS_AS_READ'
export const NOTIFICATION_ADD_PREVIEW = 'NOTIFICATION_ADD_PREVIEW'
export const SET_NOTIFICATION_COUNT = 'SET_NOTIFICATION_COUNT'
export const TOGGLE_NOTIFICATION_READ_STATUS = 'CHANGE_NOTIFICATION_READ_STATUS'

// News

export const CLEAR_NEWS = 'CLEAR_NEWS'
export const ADD_PREVIOUS_NEWS = 'ADD_PREVIOUS_NEWS'
export const ADD_FIRST_NEWS = 'ADD_FIRST_NEWS'
export const NEWS_ADD_PREVIEW = 'NEWS_ADD_PREVIEW'
export const NEWS_SET_STATS = 'NEWS_SET_STATS'
export const NEWS_SET_TOTAL = 'NEWS_SET_TOTAL'

// Misc

export const SET_PREVIEW = 'SET_PREVIEW'
export const SET_IS_BIG_THUMBNAILS = 'SET_IS_BIG_THUMBNAILS'
export const SET_IS_SHOW_ASSIGNATIONS = 'SET_IS_SHOW_ASSIGNATIONS'
export const SET_IS_SHOW_INFOS = 'SET_IS_SHOW_INFOS'
export const SET_IS_SHOW_INFOS_BREAKDOWN = 'SET_IS_SHOW_INFOS_BREAKDOWN'
export const RESET_ALL = 'RESET_ALL'

// Schedule

export const ADD_MILESTONE = 'ADD_MILESTONE'
export const ADD_MILESTONES = 'ADD_MILESTONES'
export const REMOVE_MILESTONE = 'REMOVE_MILESTONE'
export const SET_CURRENT_SCHEDULE_ITEMS = 'SET_CURRENT_SCHEDULE_ITEMS'
export const SET_SCHEDULE_ITEM_DATES = 'SET_SCHEDULE_ITEM_DATES'

// Edits

export const ADD_EDIT = 'ADD_EDIT'
export const UPDATE_EDIT = 'UPDATE_EDIT'
export const REMOVE_EDIT = 'REMOVE_EDIT'
export const UNLOCK_EDIT = 'UNLOCK_EDIT'
export const SET_EDIT_SELECTION = 'SET_EDIT_SELECTION'
export const CLEAR_SELECTED_EDITS = 'CLEAR_SELECTED_EDITS'
export const SET_EDIT_SEARCH = 'SET_EDIT_SEARCH'
export const SAVE_EDIT_SEARCH_END = 'SAVE_EDIT_SEARCH_END'
export const RESTORE_EDIT_END = 'RESTORE_EDIT_END'
export const REMOVE_EDIT_SEARCH_END = 'REMOVE_EDIT_SEARCH_END'
export const NEW_EDIT_END = 'NEW_EDIT_END'
export const LOCK_EDIT = 'LOCK_EDIT'
export const LOAD_EDIT_END = 'LOAD_EDIT_END'
export const LOAD_EDITS_START = 'LOAD_EDITS_START'
export const LOAD_EDITS_ERROR = 'LOAD_EDITS_ERROR'
export const LOAD_EDITS_END = 'LOAD_EDITS_END'
export const IMPORT_EDITS_END = 'IMPORT_EDITS_END'
export const EDIT_EDIT_END = 'EDIT_EDIT_END'
export const EDIT_CSV_FILE_SELECTED = 'EDIT_CSV_FILE_SELECTED'
export const DISPLAY_MORE_EDITS = 'DISPLAY_MORE_EDITS'
export const CANCEL_EDIT = 'CANCEL_EDIT'
export const CHANGE_EDIT_SORT = 'CHANGE_EDIT_SORT'

// Sequences

export const ADD_SEQUENCE_SEARCH = 'ADD_SEQUENCE_SEARCH'
export const CHANGE_SEQUENCE_SORT = 'CHANGE_SEQUENCE_SORT'
export const CLEAR_SELECTED_SEQUENCES = 'CLEAR_SELECTED_SEQUENCES'
export const CLEAR_SEQUENCES = 'CLEAR_SEQUENCES'
export const LOAD_SEQUENCES_START = 'LOAD_SEQUENCES_START'
export const LOAD_SEQUENCES_ERROR = 'LOAD_SEQUENCES_ERROR'
export const REMOVE_SEQUENCE_SEARCH = 'REMOVE_SEQUENCE_SEARCH'
export const SET_CURRENT_SEQUENCE = 'SET_CURRENT_SEQUENCE'
export const SET_SEQUENCES_WITH_TASKS = 'SET_SEQUENCES_WITH_TASKS'
export const SET_SEQUENCE_RETAKE_STATS = 'SET_SEQUENCES_RETAKE_STATS'
export const SET_SEQUENCE_SELECTION = 'SET_SEQUENCE_SELECTION'
export const SET_SEQUENCE_STATS = 'SET_SEQUENCE_STATS'

// 3D Model Backgrounds

export const LOAD_BACKGROUNDS_START = 'LOAD_BACKGROUNDS_START'
export const LOAD_BACKGROUNDS_ERROR = 'LOAD_BACKGROUNDS_ERROR'
export const LOAD_BACKGROUNDS_END = 'LOAD_BACKGROUNDS_END'
export const EDIT_BACKGROUND_END = 'EDIT_BACKGROUND_END'
export const DELETE_BACKGROUND_END = 'DELETE_BACKGROUND_END'

// Concepts

export const LOAD_CONCEPTS_START = 'LOAD_CONCEPTS_START'
export const LOAD_CONCEPTS_ERROR = 'LOAD_CONCEPTS_ERROR'
export const LOAD_CONCEPTS_END = 'LOAD_CONCEPTS_END'
export const EDIT_CONCEPT_END = 'EDIT_CONCEPT_END'
export const DELETE_CONCEPT_END = 'DELETE_CONCEPT_END'
export const ADD_SELECTED_CONCEPTS = 'ADD_SELECTED_CONCEPTS'
export const CLEAR_SELECTED_CONCEPTS = 'CLEAR_SELECTED_CONCEPTS'
export const LOAD_LINKED_CONCEPTS_START = 'LOAD_LINKED_CONCEPTS_START'
export const LOAD_LINKED_CONCEPTS_ERROR = 'LOAD_LINKED_CONCEPTS_ERROR'
export const LOAD_LINKED_CONCEPTS_END = 'LOAD_LINKED_CONCEPTS_END'

// Output Files

export const SET_FILE_STATUSES = 'SET_FILE_STATUSES'
export const SET_OUTPUT_FILE_TYPES = 'SET_OUTPUT_FILE_TYPES'

// Breakdown

export const REMOVE_BREAKDOWN_SEARCH_END = 'REMOVE_BREAKDOWN_SEARCH_END'
export const REMOVE_BREAKDOWN_SEARCH_FILTER_GROUP_END =
  'REMOVE_BREAKDOWN_SEARCH_FILTER_GROUP_END'
export const SAVE_BREAKDOWN_SEARCH_END = 'SAVE_BREAKDOWN_SEARCH_END'
export const SAVE_BREAKDOWN_SEARCH_FILTER_GROUP_END =
  'SAVE_BREAKDOWN_SEARCH_FILTER_GROUP_END'

// Asset Library

export const LOAD_SHARED_ASSETS_END = 'LOAD_SHARED_ASSETS_END'
export const LOAD_UNSHARED_ASSETS_END = 'LOAD_UNSHARED_ASSETS_END'
