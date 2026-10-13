const languages = ['en_us', 'en_gb', 'en_ca', 'en_au']

languages.forEach(lang => {
  ClientEvents.lang(lang, event => {
    event.renameItem('nuclearcraft:coil_copper', 'Copper Solenoid')
  })
})