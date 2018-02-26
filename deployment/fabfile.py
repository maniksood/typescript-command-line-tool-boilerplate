from fabric.api import local, settings, abort, run, cd, lcd, env

env.use_ssh_config = True
env.hosts = [ 'jarvis']
env.user  = "ec2-user"

# Repository
repo_name = "typescript-command-line-tool-boilerplate"
repo_url = "https://github.com/teaminstalocate/%s.git" % (repo_name)

# -----------------------------------------------
# Local Machine
local_base_dir = "~/Work/Instalocate/"
local_code_dir = local_base_dir + repo_name


# -----------------------------------------------
# Remote Machine
remote_code_base_dir = "~/instalocate/code/teaminstalocate/"
remote_code_dir = remote_code_base_dir + repo_name

def commit_and_push_to_repository(commit_message):
	with lcd(local_code_dir):
		git_cmd = "git add . "
		local(git_cmd)

		git_commit_cmd = "git commit -m " + commit_message
		local(git_commit_cmd)

		git_push_cmd = "git push"
		local(git_push_cmd)

def download_code_on_remote_server():
	with cd(remote_code_dir):
		cmd = "git pull"
		run(cmd)

def sync_npms():
	with cd(remote_code_dir):
		cmd = "npm install"
		run(cmd)

def deploy_to_lambda():
	with cd(remote_code_dir):
		cmd = "npm run deploy:all"
		run(cmd)

def deploy(commit_message):
	commit_and_push_to_repository(commit_message)
	download_code_on_remote_server()
	# sync_npms()
	#deploy_to_lambda()


