<script>
    var backend = require('backend-js');
    var App = backend.app(__dirname + '/behaviours', {
    path: '/api/v1',
    parser: 'json',
    port: 8383,
    origins: '*'
    });
</script>

