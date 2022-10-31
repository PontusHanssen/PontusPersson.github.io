const cmd = document.location.search.substr(1);
if (cmd.length !== 0) { eval(cmd) } else { alert(1) }
