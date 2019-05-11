//
/*
* * * * * * * * * * * * * * * * * * *
*┬  ┬  ╦  ┌┐┌┌─┐  ┬ ┬┌─┐┌─┐┬─┐  ┬┌─┐*
*└┐┌┘  ║  ││││    │ │└─┐├┤ ├┬┘  │└─┐*
* └┘   ╩  ┘└┘└─┘  └─┘└─┘└─┘┴└─o└┘└─┘*
* * * * * * * * * * * * * * * * * * *

* this config is made for fennec on android
* download on https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/

┌┬┐┌─┐┬─┐┌─┐┌─┐  ┌─┐┌─┐
│││├┤ ├┬┘│ ┬├┤   │ │├┤ 
┴ ┴└─┘┴└─└─┘└─┘  └─┘└  
* https://github.com/pyllyukko/user.js/
* https://github.com/ghacksuserjs/ghacks-user.js/
* https://git.nixnet.xyz/OrangeManBad/user.js/raw/branch/master/user.js/
* https://github.com/quindecim/fennec_user.js/
for explanation, find src on https://v1nc.github.io/ and search in src repo for pref.

┬─┐┌─┐┌─┐┌─┐
├┬┘├┤ ├─┘│ │
┴└─└─┘┴  └─┘
* https://github.com/v1nc/user.js/

┌─┐┌─┐┌─┐
├─┤├─┘├─┘
┴ ┴┴  ┴  
* https://github.com/v1nc/user.js-updater/
app to apply and update on android.

┌─┐┌─┐┌┬┐┌─┐┌─┐┬─┐┬┌─┐┌─┐┌┐┌
│  │ ││││├─┘├─┤├┬┘│└─┐│ ││││
└─┘└─┘┴ ┴┴  ┴ ┴┴└─┴└─┘└─┘┘└┘
* https://v1nc.github.io/
user.js src comparison.
*/

user_pref("_user.js.parrot", "https://reckendrees.systems/parrot.png");
user_pref("accessibility.force_disabled", 1);
user_pref("alerts.showFavicons", false);
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.enabled", true);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.bookmarks.max_backups", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.capacity", 0);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.insecure.enable", false);
user_pref("browser.casting.enabled", false);
user_pref("browser.chromeURL", "");
user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.type", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("browser.contentHandlers.types.1.title", "");
user_pref("browser.contentHandlers.types.1.type", "");
user_pref("browser.contentHandlers.types.1.uri", "");
user_pref("browser.contentHandlers.types.2.title", "");
user_pref("browser.contentHandlers.types.2.type", "");
user_pref("browser.contentHandlers.types.2.uri", "");
user_pref("browser.contentHandlers.types.3.title", "");
user_pref("browser.contentHandlers.types.3.type", "");
user_pref("browser.contentHandlers.types.3.uri", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.display.use_document_fonts", 0);
user_pref("browser.dom.window.dump.enabled", false);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.forbid_open_with", true);
user_pref("browser.download.hide_plugins_without_extensions", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.manager.retention", 0);
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.firstrun.show.localepicker", false);
user_pref("browser.firstrun.show.uidiscovery", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false); 
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.messagecenterfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.migration", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.theme", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.messageCenterExperimentEnabled", false);
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.offline-apps.notify", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.pocket.enabled", false);
user_pref("browser.privatebrowsing.autostart", false);
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 1);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.id", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.pver", "");
user_pref("browser.safebrowsing.provider.google.advisoryName", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.pver", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "");
user_pref("browser.safebrowsing.provider.mozilla.pver", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.timeout", 1);
user_pref("browser.search.geoip.url", "");
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.snippets.enabled", false);
user_pref("browser.snippets.firstrunHomepage.enabled", false);
user_pref("browser.snippets.statsUrl", "");
user_pref("browser.snippets.geoUrl", "");
user_pref("browser.snippets.syncPromo.enabled", false);
user_pref("browser.snippets.updateInterval", -1);
user_pref("browser.snippets.updateUrl", "");
user_pref("browser.startup.blankWindow", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.buildID", "20181203164059");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.page", 0);
user_pref("browser.startup.page", 0);
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", false);
user_pref("browser.ui.zoom.force-user-scalable", true);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("camera.control.face_detection.enabled", false);
user_pref("canvas.capturestream.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("clipboard.autocopy", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.currentPolicyAcceptedVersion", 0);
user_pref("datareporting.policy.currentPolicyVersion", 0);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 0);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", false);
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "");
user_pref("datareporting.policy.firstRunURL", "");
user_pref("datareporting.policy.minimumPolicyVersion", 0);
user_pref("datareporting.policy.minimumPolicyVersion.channel-beta", 0);
user_pref("device.camera.enabled", false);
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.devices.url", "");
user_pref("devtools.webide.autoinstallADBExtension", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.archivereader.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_window_open_feature.close", true); 
user_pref("dom.disable_window_open_feature.location", true); 
user_pref("dom.disable_window_open_feature.menubar", true); 
user_pref("dom.disable_window_open_feature.minimizable", true); 
user_pref("dom.disable_window_open_feature.personalbar", true); 
user_pref("dom.disable_window_open_feature.resizable", true); 
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true); 
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.event.contextmenu.enabled", false);
user_pref("dom.event.highrestimestamp.enabled", true);
user_pref("dom.flyweb.enabled", false);
user_pref("dom.forms.datetime", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);
user_pref("dom.gamepad.test.enabled", false);
user_pref("dom.imagecapture.enabled", false);
user_pref("dom.indexedDB.enabled", true);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.maxHardwareConcurrency", 2);
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("dom.popup_allowed_events", "click dblclick");
user_pref("dom.popup_maximum", 0);
user_pref("dom.push.alwaysConnect", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.debug", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.registerProtocolHandler.insecure.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.storageManager.enabled", false);
user_pref("dom.storage_access.enabled", false);
user_pref("dom.targetBlankNoOpener.enabled", true);
user_pref("dom.telephony.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("dom.w3c_pointer_events.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 1);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.autoDisableScopes", 15);
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%20/%20/");
user_pref("extensions.enabledScopes", 1);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.search.browseURL", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.update.enabled", true);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");
user_pref("extensions.webservice.discoverURL", "");
user_pref("font.blacklist.underline_offset", "");
user_pref("general.autoScroll", true);
user_pref("general.buildID.override", "20181203164059");
user_pref("general.useragent.updates.url", "");
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.offscreencanvas.enabled", false);
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.remote.oauth.uri", "");
user_pref("identity.fxaccounts.remote.profile.uri", "");
user_pref("identity.fxaccounts.remote.webchannel.uri", "https://0.0.0.0");
user_pref("identity.sync.tokenserver.uri", "");
user_pref("intl.locale.matchOS", true);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.shared_memory", false);
user_pref("javascript.options.wasm", false);
user_pref("keyword.enabled", true);
user_pref("layout.accessiblecaret.hapticfeedback", false);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("layout.css.visited_links_enabled", false);
user_pref("loop.logDomains", false);
user_pref("mathml.disabled", true);
user_pref("media.autoplay.default", 1);
user_pref("media.autoplay.enabled.user-gestures-needed", true);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.decoder-doctor.new-issue-endpoint", "");
user_pref("media.eme.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.mediadrm-widevinecdm.visible", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.ondevicechange.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.recognition.force_enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webspeech.synth_force_global_queue", false);
user_pref("media.webspeech.test.enable", false);
user_pref("media.webspeech.test.fake_fsm_events", false);
user_pref("media.webspeech.test.fake_recognition_service", false);
user_pref("middlemouse.contentLoadURL", false);
user_pref("middlemouse.paste", false);
user_pref("network.IDN_show_punycode", true);
user_pref("network.allow-experiments", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.captive-portal-service.backoffFactor", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.maxInterval", 1);
user_pref("network.captive-portal-service.minInterval", 1);
user_pref("network.connectivity-service.DNSv4.domain", "");
user_pref("network.connectivity-service.DNSv6.domain", "");
user_pref("network.connectivity-service.IPv4.url", "");
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.connectivity-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.leave-secure-alone", true);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.same-site.enabled", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.dns.blockDotOnion", true);
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.localDomains", "");
user_pref("network.file.disable_unc_paths", true);
user_pref("network.gio.supported-protocols", "");
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.redirection-limit", 10);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
user_pref("network.http.referer.defaultPolicy", 3);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("network.http.referer.spoofSource", false);
user_pref("network.http.referer.trimmingPolicy", 0);
user_pref("network.http.sendRefererHeader", 2);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.manage-offline-status", false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.predictor.cleaned-up", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

user_pref("network.protocol-handler.expose-all", false);
user_pref("network.protocol-handler.external.about",false);

user_pref("network.protocol-handler.external.javascript",false);


user_pref("network.protocol-handler.external.moz-extension",false);
user_pref("network.protocol-handler.external.ftp",false);
user_pref("network.protocol-handler.external.file",false);
user_pref("network.protocol-handler.external.about",false);
user_pref("network.protocol-handler.external.chrome",false);

user_pref("network.protocol-handler.external.blob",false);
user_pref("network.protocol-handler.external.data",false);
user_pref("network.protocol-handler.expose-all",false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.proxy.autoconfig_url.include_path", false);
user_pref("network.trr.bootstrapAddress", "");
user_pref("network.trr.confirmationNS", "");
user_pref("network.trr.mode", 0);
user_pref("network.trr.uri", "");

user_pref("offline-apps.allow_by_default", false);
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableWebGL", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("places.history.enabled", false);
user_pref("plugin.default.state", 0);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
user_pref("plugins.update.notifyUser", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.siteSettings", false);
user_pref("privacy.donottrackheader.enabled", false);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
user_pref("privacy.item.syncAccount", false);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.trackingprotection.annotate_channels", false);
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.lower_network_priority", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.ask_for_password", 2);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.content.signature.root_hash", "");
user_pref("security.csp.enable", true);
user_pref("security.csp.experimentalEnabled", true);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);
user_pref("security.dialog_enable_delay", 0);
user_pref("security.family_safety.mode", 0);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("security.insecure_password.ui.enabled", true);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("security.password_lifetime", 1);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.sri.enable", true);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
user_pref("security.ssl3.rsa_seed_sha", false);
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_camellia_256_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true); 
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true); 
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256",	true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);
user_pref("security.ssl3.rsa_aes_256_sha", true); 
user_pref("security.ssl3.rsa_aes_128_sha", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.min", 3);
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("services.blocklist.update_enabled", true);
user_pref("services.settings.default_signer", "");
user_pref("services.settings.server", "");
user_pref("services.sync.enabled", false);
user_pref("shumway.disabled", true);
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.debugSlowSql", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("ui.use_standins_for_native_colors", true);
user_pref("urlclassifier.passwordAllowTable", "");
user_pref("urlclassifier.phishTable", "");
user_pref("urlclassifier.trackingTable", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("webextensions.storage.sync.enabled", false);
user_pref("webextensions.storage.sync.serverURL", "");
user_pref("webgl.can-lose-context-in-foreground", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.disable-wgl", true);
user_pref("webgl.disabled", true);
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.enable-webgl2", false);
user_pref("webgl.min_capability_mode", true);
user_pref("xpinstall.whitelist.required", true);
/*
┬  ┬┬┌─┐┬─┐ ┌─┐┬ ┬┌─┐┌┐┌┌─┐┬┌─┐
└┐┌┘│├┤ ├┬┘ ┌─┘│││├─┤│││┌─┘││ ┬
 └┘ ┴└─┘┴└─o└─┘└┴┘┴ ┴┘└┘└─┘┴└─┘
*/
